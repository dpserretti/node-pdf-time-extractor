# Contributing Guide

Thank you for your interest in contributing to **node-pdf-time-extractor**!
Contributions are welcome and appreciated.

This document defines **how to contribute**, **project conventions**, and **expected standards** to keep the codebase clean, maintainable, and consistent.

---

## 📦 Project Setup

### Prerequisites

- Node.js **v14+**
- npm

### Local setup

    npm install
    npm run seed
    npm start

- `npm run seed` generates a sample PDF inside `documents/`
- `npm start` runs the extractor against all PDFs in that directory

---

## 📂 Project Structure

Please respect the existing project layout:

    documents/        # Input / generated PDFs
    scripts/          # Utility scripts (seed, mocks, helpers)
    src/              # Application source code
      ├── services/   # I/O and external integrations
      ├── utils/      # Pure utility / business logic
      ├── config.js   # Centralized configuration
      └── index.js    # Application entry point

- Do not place generated files inside `src/`
- Avoid committing large or unnecessary binaries

---

## 🧠 Coding Guidelines

- Follow the **Single Responsibility Principle**
- Keep functions small and readable
- Prefer **explicit code over clever code**
- Avoid side effects in utility modules
- Use clear and descriptive variable names

---

## 🧪 Testing

Tests are not mandatory yet, but new features should be written in a **test-friendly way**.

Future test setup may include:

- Jest
- Unit tests for utilities
- Mocks for filesystem and PDF parsing

---

## 📝 Commit Messages

This project follows **Conventional Commits**.

Examples:

    feat: add PDF parsing and time extraction pipeline
    fix: handle invalid timestamps gracefully
    chore: update dependencies
    refactor: split index logic into services

---

## 🔀 Pull Requests

When opening a Pull Request:

- Keep PRs **small and focused**
- Clearly describe **what problem is being solved**
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

By contributing to this project, you agree that your contributions will be licensed under the **MIT License**.

---

Thanks for contributing 🚀
Well-structured contributions make this project better for everyone.
