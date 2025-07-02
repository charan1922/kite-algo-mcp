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
