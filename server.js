import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import {
  runTradingAlgorithm,
  runOptionTradingAlgorithm,
  calculateNetDelta,
  authenticate,
  fetchInitialData,
  analyzeAndDecideTrade,
  isStockOptionTradingSupported,
  getOptionsSupportedStocks,
  getStockDetails,
} from "./lib/tradingService.js";

const app = express();
const PORT = process.env.PORT || 5555;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});
app.use("/api/", limiter);

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    service: "Kite Algo Trading Server",
  });
});

// API Routes

// Get market analysis for an instrument
app.get("/api/analysis/:instrumentToken", async (req, res) => {
  try {
    const { instrumentToken } = req.params;
    const kite = await authenticate();
    const data = await fetchInitialData(kite, parseInt(instrumentToken));
    const analysis = analyzeAndDecideTrade(data);

    res.json({
      success: true,
      instrumentToken: parseInt(instrumentToken),
      analysis,
      dataPoints: data.length,
      lastUpdated: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Run trading algorithm
app.post("/api/trading/run", async (req, res) => {
  try {
    const { instrumentToken, quantity, tradeDurationMinutes } = req.body;

    if (!instrumentToken || !quantity || !tradeDurationMinutes) {
      return res.status(400).json({
        success: false,
        error:
          "Missing required parameters: instrumentToken, quantity, tradeDurationMinutes",
      });
    }

    const result = await runTradingAlgorithm(
      instrumentToken,
      quantity,
      tradeDurationMinutes
    );

    res.json({
      success: true,
      ...result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Run options trading algorithm
app.post("/api/options/run", async (req, res) => {
  try {
    const {
      instrumentToken,
      strikePrice,
      optionType,
      expiryDate,
      quantity,
      tradeDurationMinutes,
    } = req.body;

    if (
      !instrumentToken ||
      !strikePrice ||
      !optionType ||
      !expiryDate ||
      !quantity ||
      !tradeDurationMinutes
    ) {
      return res.status(400).json({
        success: false,
        error:
          "Missing required parameters: instrumentToken, strikePrice, optionType, expiryDate, quantity, tradeDurationMinutes",
      });
    }

    const result = await runOptionTradingAlgorithm(
      instrumentToken,
      strikePrice,
      optionType,
      expiryDate,
      quantity,
      tradeDurationMinutes
    );

    res.json({
      success: true,
      ...result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Calculate net delta
app.get("/api/delta/calculate", async (req, res) => {
  try {
    const result = await calculateNetDelta();

    res.json({
      success: true,
      netDeltaByUnderlying: result,
      calculatedAt: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Check if a stock supports options trading
app.get("/api/stocks/:symbol/options-support", async (req, res) => {
  try {
    const { symbol } = req.params;
    const result = isStockOptionTradingSupported(symbol.toUpperCase());

    res.json({
      success: true,
      symbol: symbol.toUpperCase(),
      ...result,
      checkedAt: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Get all stocks that support options trading
app.get("/api/stocks/options-supported", async (req, res) => {
  try {
    const { search } = req.query;
    const result = getOptionsSupportedStocks(search);

    res.json({
      success: true,
      searchTerm: search || null,
      totalCount: result.stocks.length,
      ...result,
      retrievedAt: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Get detailed information about a specific stock
app.get("/api/stocks/:symbol/details", async (req, res) => {
  try {
    const { symbol } = req.params;
    const result = getStockDetails(symbol.toUpperCase());

    res.json({
      success: true,
      symbol: symbol.toUpperCase(),
      ...result,
      retrievedAt: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// Serve static files (for frontend)
app.use(express.static("public"));

// API documentation endpoint
app.get("/api/docs", (req, res) => {
  res.json({
    title: "Kite Algo Trading API",
    version: "1.0.0",
    endpoints: {
      "GET /health": "Health check",
      "GET /api/analysis/:instrumentToken":
        "Get market analysis for instrument",
      "POST /api/trading/run": "Run equity trading algorithm",
      "POST /api/options/run": "Run options trading algorithm",
      "GET /api/delta/calculate": "Calculate net delta for options positions",
      "GET /api/stocks/:symbol/options-support":
        "Check if a stock supports options trading",
      "GET /api/stocks/options-supported":
        "Get all stocks that support options trading (optional ?search= parameter)",
      "GET /api/stocks/:symbol/details":
        "Get detailed information about a specific stock",
      "GET /api/docs": "This documentation",
    },
    examples: {
      trading: {
        url: "/api/trading/run",
        method: "POST",
        body: {
          instrumentToken: 408065,
          quantity: 100,
          tradeDurationMinutes: 5,
        },
      },
      options: {
        url: "/api/options/run",
        method: "POST",
        body: {
          instrumentToken: 408065,
          strikePrice: 2500,
          optionType: "CE",
          expiryDate: "2025-07-31",
          quantity: 1,
          tradeDurationMinutes: 5,
        },
      },
      stockSupport: {
        url: "/api/stocks/RELIANCE/options-support",
        method: "GET",
        description: "Check if RELIANCE supports options trading",
      },
      stocksList: {
        url: "/api/stocks/options-supported?search=REL",
        method: "GET",
        description:
          "Get all stocks with 'REL' in symbol/name that support options",
      },
      stockDetails: {
        url: "/api/stocks/TCS/details",
        method: "GET",
        description: "Get detailed information about TCS stock",
      },
    },
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    error: "Endpoint not found",
    availableEndpoints: [
      "/health",
      "/api/docs",
      "/api/trading/run",
      "/api/options/run",
      "/api/delta/calculate",
      "/api/stocks/:symbol/options-support",
      "/api/stocks/options-supported",
      "/api/stocks/:symbol/details",
    ],
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error("Server error:", err);
  res.status(500).json({
    success: false,
    error: "Internal server error",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Kite Algo Trading HTTP Server running on port ${PORT}`);
  console.log(`📊 API Documentation: http://localhost:${PORT}/api/docs`);
  console.log(`💹 Health Check: http://localhost:${PORT}/health`);
  console.log(`🌐 Web Dashboard: http://localhost:${PORT}`);
});

// Graceful shutdown
process.on("SIGINT", () => {
  console.log("\nReceived SIGINT. Shutting down HTTP server gracefully...");
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("\nReceived SIGTERM. Shutting down HTTP server gracefully...");
  process.exit(0);
});
