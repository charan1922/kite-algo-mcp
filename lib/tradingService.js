import { KiteConnect } from "kiteconnect";
import dotenv from "dotenv";

dotenv.config();

// Shared Kite Connect instance
const kc = new KiteConnect({
  api_key: process.env.KITE_API_KEY,
});

let accessToken = null;

// Authentication function
export async function authenticate() {
  if (accessToken) {
    kc.setAccessToken(accessToken);
    return kc;
  }

  const requestToken = process.env.KITE_REQUEST_TOKEN;
  if (!requestToken) {
    console.log("Please visit this URL to authorize: ", kc.getLoginURL());
    throw new Error("KITE_REQUEST_TOKEN not found. Please authorize the app.");
  }

  try {
    const data = await kc.generateSession(
      requestToken,
      process.env.KITE_API_SECRET
    );
    accessToken = data.access_token;
    kc.setAccessToken(accessToken);
    console.log("Successfully authenticated with KiteConnect.");
    return kc;
  } catch (e) {
    console.error("Authentication failed:", e);
    throw e;
  }
}

// Logging function
export function logTradeDecision(instrument, type, quantity, price, status) {
  const logEntry = {
    timestamp: new Date().toISOString(),
    instrument,
    type,
    quantity,
    price,
    status,
  };
  console.log(
    `[TRADE LOG] ${logEntry.timestamp} - Instrument: ${instrument}, Type: ${type}, Quantity: ${quantity}, Price: ${price}, Status: ${status}`
  );
  return logEntry;
}

// Fetch historical data
export async function fetchInitialData(kite, instrumentToken) {
  const toDate = new Date();
  const fromDate = new Date(toDate.getTime() - 5 * 24 * 60 * 60 * 1000); // 5 days data

  const data = await kite.getHistoricalData(
    instrumentToken,
    fromDate.toISOString().split("T")[0],
    toDate.toISOString().split("T")[0],
    "day"
  );
  return data;
}

// Trading analysis function
export function analyzeAndDecideTrade(historicalData) {
  if (historicalData.length < 20) {
    return { shouldTrade: false, type: "N/A", price: 0 };
  }

  const closes = historicalData.map((d) => d.close);

  // Calculate SMA (Simple Moving Average)
  const sma =
    closes.slice(closes.length - 20).reduce((sum, val) => sum + val, 0) / 20;

  // Calculate VWAP (Volume Weighted Average Price) - simplified for daily data
  const vwap =
    historicalData
      .slice(historicalData.length - 20)
      .reduce((sum, d) => sum + d.close * d.volume, 0) /
    historicalData
      .slice(historicalData.length - 20)
      .reduce((sum, d) => sum + d.volume, 0);

  const latestClose = closes[closes.length - 1];

  let shouldTrade = false;
  let type = "N/A";

  if (latestClose > sma && latestClose > vwap) {
    shouldTrade = true;
    type = "BUY";
  } else if (latestClose < sma && latestClose < vwap) {
    shouldTrade = true;
    type = "SELL";
  }

  return { shouldTrade, type, price: latestClose, sma, vwap };
}

// Execute trade function
export async function executeTrade(kite, instrumentToken, quantity, type) {
  // Placeholder for actual order placement
  console.log(`Executing ${type} order for ${quantity} of ${instrumentToken}`);
  // Example: await kite.placeOrder("regular", { instrument_token: instrumentToken, quantity, transaction_type: type, order_type: "MARKET", product: "CNC" });

  // Return simulated order response
  return {
    order_id: `ORDER_${Date.now()}`,
    status: "COMPLETE",
    quantity,
    price: Math.random() * 1000 + 100, // Simulated price
    instrument_token: instrumentToken,
    transaction_type: type,
  };
}

// Black-Scholes Delta calculation
export function blackScholesDelta(S, K, T, r, sigma, type) {
  const d1 =
    (Math.log(S / K) + (r + (sigma * sigma) / 2) * T) / (sigma * Math.sqrt(T));
  const N_d1 = normalCdf(d1);

  if (type === "CE") {
    // Call Option
    return N_d1;
  } else if (type === "PE") {
    // Put Option
    return N_d1 - 1;
  } else {
    throw new Error("Invalid option type. Must be 'CE' (Call) or 'PE' (Put).");
  }
}

// Standard normal cumulative distribution function (CDF)
export function normalCdf(x) {
  const a1 = 0.31938153;
  const a2 = -0.356563782;
  const a3 = 1.781477937;
  const a4 = -1.821255978;
  const a5 = 1.330274429;
  const L = Math.abs(x);
  const K = 1 / (1 + 0.2316419 * L);
  const W =
    1 -
    (((((a5 * K + a4) * K + a3) * K + a2) * K + a1) *
      K *
      Math.exp((-L * L) / 2)) /
      Math.sqrt(2 * Math.PI);
  return x < 0 ? 1 - W : W;
}

// Main trading algorithm
export async function runTradingAlgorithm(
  instrumentToken,
  quantity,
  tradeDurationMinutes
) {
  try {
    console.log(
      `Running trading algorithm for instrument ${instrumentToken} with quantity ${quantity} for ${tradeDurationMinutes} minutes.`
    );

    const kite = await authenticate();
    const initialData = await fetchInitialData(kite, instrumentToken);
    const tradeDecision = analyzeAndDecideTrade(initialData);

    const results = [];

    if (tradeDecision.shouldTrade) {
      const orderResult = await executeTrade(
        kite,
        instrumentToken,
        quantity,
        tradeDecision.type
      );
      const logEntry = logTradeDecision(
        instrumentToken,
        tradeDecision.type,
        quantity,
        tradeDecision.price,
        "Executed"
      );
      results.push({ ...logEntry, orderResult });
    } else {
      const logEntry = logTradeDecision(
        instrumentToken,
        "N/A",
        0,
        0,
        "No trade"
      );
      results.push(logEntry);
    }

    // Simulate continuous trading for the specified duration
    const endTime = Date.now() + tradeDurationMinutes * 60 * 1000;
    while (Date.now() < endTime) {
      await new Promise((resolve) => setTimeout(resolve, 60 * 1000)); // Wait for 1 minute
      const currentData = await fetchInitialData(kite, instrumentToken); // Fetch latest data
      const currentTradeDecision = analyzeAndDecideTrade(currentData);

      if (currentTradeDecision.shouldTrade) {
        const orderResult = await executeTrade(
          kite,
          instrumentToken,
          quantity,
          currentTradeDecision.type
        );
        const logEntry = logTradeDecision(
          instrumentToken,
          currentTradeDecision.type,
          quantity,
          currentTradeDecision.price,
          "Executed"
        );
        results.push({ ...logEntry, orderResult });
      } else {
        const logEntry = logTradeDecision(
          instrumentToken,
          "N/A",
          0,
          0,
          "No trade"
        );
        results.push(logEntry);
      }
    }

    console.log("Trading algorithm finished.");
    return {
      status: "success",
      message: "Trading algorithm completed.",
      results,
      summary: {
        totalTrades: results.filter((r) => r.type !== "N/A").length,
        duration: tradeDurationMinutes,
      },
    };
  } catch (error) {
    console.error(`Error in runTradingAlgorithm: ${error.message}`);
    throw error;
  }
}

// Options trading algorithm
export async function runOptionTradingAlgorithm(
  instrumentToken,
  strikePrice,
  optionType,
  expiryDate,
  quantity,
  tradeDurationMinutes
) {
  try {
    console.log(
      `Running option trading algorithm for instrument ${instrumentToken} (Strike: ${strikePrice}, Type: ${optionType}, Expiry: ${expiryDate}) with quantity ${quantity} for ${tradeDurationMinutes} minutes.`
    );

    const kite = await authenticate();
    const results = [];

    // Placeholder for option-specific data fetching and analysis
    const shouldTrade = Math.random() > 0.5; // Simulate a trade decision
    const tradeType = shouldTrade
      ? Math.random() > 0.5
        ? "BUY"
        : "SELL"
      : "N/A";
    const tradePrice = 100 + Math.random() * 50; // Simulate a trade price

    if (shouldTrade) {
      const logEntry = logTradeDecision(
        instrumentToken,
        tradeType,
        quantity,
        tradePrice,
        "Option Trade Executed (Simulated)"
      );
      results.push(logEntry);
    } else {
      const logEntry = logTradeDecision(
        instrumentToken,
        "N/A",
        0,
        0,
        "No Option Trade"
      );
      results.push(logEntry);
    }

    // Simulate continuous trading for the specified duration
    const endTime = Date.now() + tradeDurationMinutes * 60 * 1000;
    while (Date.now() < endTime) {
      await new Promise((resolve) => setTimeout(resolve, 60 * 1000)); // Wait for 1 minute

      const currentShouldTrade = Math.random() > 0.5;
      const currentTradeType = currentShouldTrade
        ? Math.random() > 0.5
          ? "BUY"
          : "SELL"
        : "N/A";
      const currentTradePrice = 100 + Math.random() * 50;

      if (currentShouldTrade) {
        const logEntry = logTradeDecision(
          instrumentToken,
          currentTradeType,
          quantity,
          currentTradePrice,
          "Option Trade Executed (Simulated)"
        );
        results.push(logEntry);
      } else {
        const logEntry = logTradeDecision(
          instrumentToken,
          "N/A",
          0,
          0,
          "No Option Trade"
        );
        results.push(logEntry);
      }
    }

    console.log("Option trading algorithm finished.");
    return {
      status: "success",
      message: "Option trading algorithm completed.",
      results,
      summary: {
        totalTrades: results.filter((r) => r.type !== "N/A").length,
        duration: tradeDurationMinutes,
        optionDetails: { strikePrice, optionType, expiryDate },
      },
    };
  } catch (error) {
    console.error("Error in option trading algorithm:", error);
    throw error;
  }
}

// Calculate net delta
export async function calculateNetDelta() {
  try {
    const kite = await authenticate();
    const positions = await kite.getPositions();

    const netDeltaByUnderlying = {};

    // Assuming a risk-free rate and volatility for Black-Scholes calculation
    const riskFreeRate = 0.05; // 5%
    const assumedVolatility = 0.2; // 20%

    for (const position of positions.day) {
      const { tradingsymbol, quantity, last_price, instrument_token } =
        position;

      // Attempt to parse tradingsymbol for option details
      const match = tradingsymbol.match(/^([A-Z]+)(\d+)([CP])E$/);
      if (match) {
        const underlying = match[1];
        const strikePrice = parseFloat(match[2]);
        const optionType = match[3] === "C" ? "CE" : "PE";

        // For simplicity, assuming time to expiry (T) as 30 days (approx 0.082 years)
        const timeToExpiry = 30 / 365;

        // Using option's last price as a proxy for underlying for now
        const spotPrice = last_price;

        try {
          const delta = blackScholesDelta(
            spotPrice,
            strikePrice,
            timeToExpiry,
            riskFreeRate,
            assumedVolatility,
            optionType
          );
          const positionDelta = delta * quantity;

          if (!netDeltaByUnderlying[underlying]) {
            netDeltaByUnderlying[underlying] = 0;
          }
          netDeltaByUnderlying[underlying] += positionDelta;
        } catch (error) {
          console.error(
            `Error calculating delta for ${tradingsymbol}: ${error.message}`
          );
        }
      } else {
        console.log(
          `Could not parse tradingsymbol for option details: ${tradingsymbol}`
        );
      }
    }

    return netDeltaByUnderlying;
  } catch (error) {
    console.error(`Error in calculateNetDelta: ${error.message}`);
    throw error;
  }
}
