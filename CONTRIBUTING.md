# Contributing to Kite Algo MCP Server

Thank you for your interest in contributing to the Kite Algo MCP Server! This document provides guidelines for contributing to the project.

## Code of Conduct

Please be respectful and professional in all interactions. We aim to create a welcoming environment for all contributors.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Install dependencies: `npm install`
4. Set up your environment variables (copy `.env.example` to `.env`)
5. Start development server: `npm run dev` (uses nodemon for auto-restart)

## Development Guidelines

### Code Style

- Use modern JavaScript (ES6+) features
- Follow consistent indentation (2 spaces)
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions focused and small

### Testing

- Test your changes locally before submitting
- Ensure the server starts without errors: `npm run lint`
- Verify MCP tools work as expected

### Commit Messages

Use clear, descriptive commit messages:

- `feat: add new trading indicator`
- `fix: resolve authentication issue`
- `docs: update README with new features`
- `refactor: improve error handling`

## Types of Contributions

### Bug Fixes

- Check existing issues before creating new ones
- Include steps to reproduce the bug
- Provide expected vs actual behavior

### New Features

- Discuss major changes in an issue first
- Keep changes focused and atomic
- Update documentation as needed

### Trading Algorithms

- Ensure proper risk management
- Include backtesting results if possible
- Document algorithm logic clearly
- Add appropriate error handling

### Documentation

- Keep README up to date
- Add code comments for complex functions
- Update API documentation for new tools

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Test thoroughly
4. Update documentation if needed
5. Submit a pull request with:
   - Clear description of changes
   - Link to related issues
   - Testing performed

## Security Considerations

- Never commit API keys or secrets
- Use environment variables for sensitive data
- Review code for potential security issues
- Report security vulnerabilities privately

## Financial Markets Disclaimer

This project involves financial markets and trading:

- All trading algorithms should include appropriate risk management
- Test thoroughly in paper trading environments
- Include clear disclaimers about financial risks
- Do not provide financial advice

## Questions?

Feel free to open an issue for:

- Questions about the codebase
- Suggestions for improvements
- Bug reports
- Feature requests

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (ISC License).
