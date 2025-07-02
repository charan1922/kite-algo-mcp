import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {
  runTradingAlgorithm,
  runOptionTradingAlgorithm,
  calculateNetDelta,
} from "./lib/tradingService.js";

const server = new McpServer({
  name: "Kite Algo MCP Server",
  description:
    "A Model Context Protocol server for algorithmic trading using Zerodha Kite Connect API",
  version: "1.0.0",
});

async function init() {
  const transport = new StdioServerTransport();
  await server.connect(transport);

  // Register trading algorithm tool
  server.registerTool({
    name: "runTradingAlgorithm",
    description:
      "Runs a profitable equity trading algorithm based on SMA and VWAP indicators.",
    inputSchema: z.object({
      instrumentToken: z
        .number()
        .describe("The instrument token for the stock to trade."),
      quantity: z.number().describe("The quantity of shares to trade."),
      tradeDurationMinutes: z
        .number()
        .describe(
          "The duration in minutes for which the algorithm should run."
        ),
    }),
    async call({ instrumentToken, quantity, tradeDurationMinutes }) {
      return await runTradingAlgorithm(
        instrumentToken,
        quantity,
        tradeDurationMinutes
      );
    },
  });

  // Register options trading algorithm tool
  server.registerTool({
    name: "runOptionTradingAlgorithm",
    description:
      "Runs a simulated options trading algorithm with configurable parameters.",
    inputSchema: z.object({
      instrumentToken: z
        .number()
        .describe("The instrument token for the option to trade."),
      strikePrice: z.number().describe("The strike price of the option."),
      optionType: z
        .enum(["CE", "PE"])
        .describe("The type of option (CE for Call, PE for Put)."),
      expiryDate: z
        .string()
        .describe("The expiry date of the option in YYYY-MM-DD format."),
      quantity: z.number().describe("The quantity of option lots to trade."),
      tradeDurationMinutes: z
        .number()
        .describe(
          "The duration in minutes for which the algorithm should run."
        ),
    }),
    async call({
      instrumentToken,
      strikePrice,
      optionType,
      expiryDate,
      quantity,
      tradeDurationMinutes,
    }) {
      return await runOptionTradingAlgorithm(
        instrumentToken,
        strikePrice,
        optionType,
        expiryDate,
        quantity,
        tradeDurationMinutes
      );
    },
  });

  // Register delta calculation tool
  server.registerTool({
    name: "calculateNetDelta",
    description:
      "Groups open positions by underlying and calculates the net delta of option strategies using Black-Scholes model.",
    inputSchema: z.object({}),
    async call() {
      return await calculateNetDelta();
    },
  });

  console.log("MCP server ready and listening for connections.");
}

// Handle graceful shutdown
process.on("SIGINT", () => {
  console.log("\nReceived SIGINT. Shutting down MCP server gracefully...");
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.log("\nReceived SIGTERM. Shutting down MCP server gracefully...");
  process.exit(0);
});

init().catch((error) => {
  console.error("Failed to start MCP server:", error);
  process.exit(1);
});
