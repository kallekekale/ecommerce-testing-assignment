# E-Commerce Testing Assignment

This project contains unit tests for a utility library, demonstrating both AI-assisted and manually written test approaches.

## Project Structure

```
tests/
  ai-assisted/          # AI-generated test suites
    README.md           # Documentation of AI approach
  manual/               # Manually written test suites
    README.md           # Documentation of manual approach
src/                    # Source files under test
```

## Test Suites

### AI-Assisted Tests (GitHub Copilot)

Located in `tests/ai-assisted/`, these tests were created with GitHub Copilot assistance:

- **filter.js** - Array filtering functionality (100% coverage)
- **isEmpty.js** - Empty value checking functionality (100% coverage)

### Manual Tests

Located in `tests/manual/`, manual tests for the following functions:
- reduce
- ceil
- clamp
- defaultTo
- compact
- words
- toNumber
- capitalize

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests with coverage
```bash
npm run test:coverage
```

### Run specific test file
```bash
npm test -- <filename>.test.js
```

## Technologies

- **Test Framework:** Jest 30.2.0
- **Node.js:** ES Modules
- **CI/CD:** GitHub Actions
- **Coverage:** Coveralls

## Configuration

- `jest.config.js` - Jest configuration with ES modules support
- `.github/workflows/ci.yml` - GitHub Actions workflow for CI/CD
- Coverage is collected only for the 10 functions being tested

## Notes

- Some tests may fail due to bugs in the source code (e.g., filter.js has a known bug with empty array initialization)
- Test failures due to source code bugs are expected and demonstrate that tests correctly identify issues
