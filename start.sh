#!/bin/bash

# Kite Algo MCP Server - Quick Start Script

echo "🚀 Kite Algo MCP Server Quick Start"
echo "=================================="

# Check if .env file exists
if [ ! -f .env ]; then
    echo "⚠️  Environment file not found. Creating from template..."
    cp .env.example .env
    echo "✅ Created .env file. Please edit it with your Kite Connect credentials."
    echo ""
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

echo "🎯 Choose which server to start:"
echo "1) HTTP Server (Web Dashboard + API) - Port 5555"
echo "2) MCP Server (AI Agent Integration) - Stdio"
echo "3) Both servers in development mode"
echo ""

read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo "🌐 Starting HTTP Server..."
        echo "Dashboard will be available at: http://localhost:5555"
        npm run start:http
        ;;
    2)
        echo "🤖 Starting MCP Server..."
        echo "Server ready for AI agent connections via stdio"
        npm run start:mcp
        ;;
    3)
        echo "🔧 Starting both servers in development mode..."
        echo "HTTP Server: http://localhost:5555"
        echo "MCP Server: stdio (for AI agents)"
        
        # Start both servers in background
        npm run dev:http &
        HTTP_PID=$!
        
        npm run dev:mcp &
        MCP_PID=$!
        
        echo "✅ Both servers started!"
        echo "HTTP Server PID: $HTTP_PID"
        echo "MCP Server PID: $MCP_PID"
        echo ""
        echo "Press Ctrl+C to stop both servers"
        
        # Wait for user interrupt
        trap "echo '🛑 Stopping servers...'; kill $HTTP_PID $MCP_PID; exit 0" INT
        wait
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac
