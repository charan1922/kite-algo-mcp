import dotenv from "dotenv";
dotenv.config({ debug: false });

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {
  runTradingAlgorithm,
  runOptionTradingAlgorithm,
  calculateNetDelta,
  isStockOptionTradingSupported,
  getOptionsSupportedStocks,
  getStockDetails,
} from "./lib/tradingService.js";

const server = new McpServer({
  name: "Kite Algo MCP Server",
  description:
    "A Model Context Protocol server for algorithmic trading using Zerodha Kite Connect API",
  version: "1.0.0",
});

async function init() {
  /*
  server.registerTool(
    "runTradingAlgorithm",
    {
      title: "Run Trading Algorithm",
      description:
        "Runs a profitable equity trading algorithm based on SMA and VWAP indicators.",
      inputSchema: z.object({
        instrumentToken: z.number(),
        quantity: z.number(),
        tradeDurationMinutes: z.number(),
      }),
    },
    async ({ instrumentToken, quantity, tradeDurationMinutes }) => {
      const result = await runTradingAlgorithm(
        instrumentToken,
        quantity,
        tradeDurationMinutes
      );
      return result ?? { error: "No result from trading algorithm." };
    }
  );

  server.registerTool(
    "runOptionTradingAlgorithm",
    {
      title: "Run Option Trading Algorithm",
      description: "Runs a simulated options trading algorithm.",
      inputSchema: z.object({
        instrumentToken: z.number(),
        strikePrice: z.number(),
        optionType: z.enum(["CE", "PE"]),
        expiryDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
        quantity: z.number(),
        tradeDurationMinutes: z.number(),
      }),
    },
    async ({
      instrumentToken,
      strikePrice,
      optionType,
      expiryDate,
      quantity,
      tradeDurationMinutes,
    }) => {
      const result = await runOptionTradingAlgorithm(
        instrumentToken,
        strikePrice,
        optionType,
        expiryDate,
        quantity,
        tradeDurationMinutes
      );
      return result ?? { error: "No result from options trading algorithm." };
    }
  );

  server.registerTool(
    "calculateNetDelta",
    {
      title: "Calculate Net Delta",
      description: "Calculates net delta for options strategies.",
      inputSchema: z.object({}),
    },
    async () => {
      const result = await calculateNetDelta();
      return result ?? { error: "No result from net delta calculation." };
    }
  );
  */

  server.registerTool(
    "isStockOptionTradingSupported",
    {
      title: "Check Stock Option Trading Support",
      description: "Check if a specific stock supports options trading.",
      inputSchema: z.object({
        symbol: z.string(),
      }),
    },
    async ({ symbol }) => {
      const result = await isStockOptionTradingSupported(symbol);
      return result ?? { supported: false, message: "No result." };
    }
  );

  /*
  server.registerTool(
    "getOptionsSupportedStocks",
    {
      title: "List Option Supported Stocks",
      description: "Lists all stocks supporting options trading.",
      inputSchema: z.object({
        searchTerm: z.string().optional(),
      }),
    },
    async ({ searchTerm }) => {
      const result = await getOptionsSupportedStocks(searchTerm);
      return result ?? { count: 0, stocks: [], message: "No result." };
    }
  );

  server.registerTool(
    "getStockDetails",
    {
      title: "Get Stock Details",
      description: "Gets detailed stock information.",
      inputSchema: z.object({
        symbol: z.string(),
      }),
    },
    async ({ symbol }) => {
      const result = await getStockDetails(symbol);
      return (
        result ?? { found: false, message: "No result." }
      );
    }
  );
  */

  const transport = new StdioServerTransport();
  await server.connect(transport);

  console.error("MCP server ready and listening for connections.");
}

process.on("SIGINT", () => {
  console.error("\nReceived SIGINT. Shutting down MCP server gracefully...");
  process.exit(0);
});

process.on("SIGTERM", () => {
  console.error("\nReceived SIGTERM. Shutting down MCP server gracefully...");
  process.exit(0);
});

init().catch((error) => {
  console.error("Failed to start MCP server:", error);
  process.exit(1);
});
