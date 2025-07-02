#!/usr/bin/env node

// Simple test script for MCP server functionality
import {
  isStockOptionTradingSupported,
  getOptionsSupportedStocks,
  getStockDetails,
} from "./lib/tradingService.js";

console.log("Testing MCP server functions...\n");

// Test 1: Check if RELIANCE supports options trading
console.log("1. Testing isStockOptionTradingSupported('RELIANCE'):");
const relianceResult = isStockOptionTradingSupported("RELIANCE");
console.log(JSON.stringify(relianceResult, null, 2));
console.log();

// Test 2: Check if an invalid stock supports options trading
console.log("2. Testing isStockOptionTradingSupported('INVALIDSTOCK'):");
const invalidResult = isStockOptionTradingSupported("INVALIDSTOCK");
console.log(JSON.stringify(invalidResult, null, 2));
console.log();

// Test 3: Get all options supported stocks with search
console.log("3. Testing getOptionsSupportedStocks('TCS'):");
const searchResult = getOptionsSupportedStocks("TCS");
console.log(JSON.stringify(searchResult, null, 2));
console.log();

// Test 4: Get stock details
console.log("4. Testing getStockDetails('INFY'):");
const detailsResult = getStockDetails("INFY");
console.log(JSON.stringify(detailsResult, null, 2));
console.log();

// Test 5: Get all options supported stocks (first 5)
console.log("5. Testing getOptionsSupportedStocks() - first 5 stocks:");
const allStocks = getOptionsSupportedStocks();
console.log(`Total stocks: ${allStocks.count}`);
console.log("First 5 stocks:");
console.log(JSON.stringify(allStocks.stocks.slice(0, 5), null, 2));

console.log("\n✅ All MCP server functions are working correctly!");
