import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { optionsStockList } from "./data/optionsStockList.js";

export function isStockOptionTradingSupported(symbol) {
  if (!symbol) {
    return {
      supported: false,
      error: "Symbol is required",
    };
  }

  const stock = optionsStockList.find(
    (stock) => stock.symbol.toLowerCase() === symbol.toLowerCase()
  );

  if (stock) {
    return {
      supported: true,
      stock: {
        symbol: stock.symbol,
        stockName: stock.stockName,
        lotSize: stock.lotSize,
      },
    };
  }

  return {
    supported: false,
    message: `${symbol} is not supported for options trading`,
    suggestion: "Check available symbols using getOptionsSupportedStocks",
  };
}

const server = new McpServer({
  name: "Kite Algo MCP Server",
  description:
    "A Model Context Protocol server for algorithmic trading using Zerodha Kite Connect API",
  version: "1.0.0",
});

async function init() {
  server.tool(
    "isStockOptionTradingSupported",
    {
      symbol: z.string().min(1, "Symbol is required"),
    },
    ({ symbol }) => {
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(isStockOptionTradingSupported(symbol)),
          },
        ],
      };
    }
  );

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
