# Contributing Guide

Thank you for your interest in contributing to **node-pdf-time-extractor**!
Contributions are welcome and appreciated.

This document outlines how to contribute, project conventions, and expected standards to keep the codebase clean, maintainable, and consistent.

---

## 📦 Project Setup

### Prerequisites

- Node.js v18+
- npm

### Local setup

```bash
npm install
npm run seed
npm test
```

- `npm run seed` generates a sample PDF inside the `documents/` directory
- `npm test` runs unit tests and CLI tests

---

## 📂 Project Structure

```txt
src/
├── cli/          # CLI interface and argument parsing
├── core/         # Core business logic
├── services/     # I/O and external integrations
├── utils/        # Pure utility functions
tests/            # Unit and CLI tests
.github/workflows/ # CI configuration
documents/        # Sample / input PDFs
```

Guidelines:
- Keep business logic out of the CLI layer
- Prefer pure functions in `utils/`
- Avoid committing generated or large binary files

---

## 🧠 Coding Guidelines

- Follow the Single Responsibility Principle
- Keep functions small and readable
- Prefer explicit code over clever code
- Avoid side effects in utility modules
- Use clear and descriptive variable names

---

## 🧪 Testing & CI

- All Pull Requests run tests automatically via GitHub Actions
- PRs with failing tests will not be accepted
- New features should include tests when applicable

Run locally:

```bash
npm test
```

---

## 📝 Commit Messages

This project follows **Conventional Commits**.

Examples:

```txt
feat: add CLI interface
feat: add controlled parallel PDF processing
test: add CLI integration tests
ci: add GitHub Actions workflow
docs: update README
```

---

## 🔀 Pull Requests

When opening a Pull Request:

- Keep PRs small and focused
- Clearly describe what problem is being solved
- Reference related issues when applicable
- Ensure the project runs locally without errors

Pull Requests that introduce breaking changes should be discussed first.

---

## 🐞 Bug Reports & Feature Requests

- Use GitHub Issues to report bugs or propose enhancements
- Provide clear reproduction steps for bugs
- Feature requests should explain the use case and expected behavior

---

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the MIT License.