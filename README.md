# 📄 Automated PDF Time Extractor

A **Node.js CLI tool** designed to batch-parse PDF reports, extract time-tracking data using **Regular Expressions**, and calculate aggregated totals efficiently — with **parallel processing**, **tests**, and **CI**.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

---

## 💡 Context & Motivation

This project was created to solve a real-world productivity bottleneck encountered during a consulting engagement.

Billable hours were distributed across dozens of auto-generated, unstructured PDF reports. Manually opening each file, locating time entries, and summing values was slow, repetitive, and error-prone.

The goal was to build a **reliable, reusable, and auditable CLI tool** that performs this task automatically.

---

## 🚀 Features

- Batch processing of PDF files
- Controlled parallel processing
- Configurable concurrency
- Command Line Interface (CLI)
- Optional debug logging
- Unit tests and CLI contract tests
- GitHub Actions CI pipeline

---

## 📦 Installation

### Local development

```bash
npm install
```

### Run via npx (after publish)

```bash
npx pdf-time-extractor
```

---

## 🛠️ Usage

```bash
pdf-time-extractor [directory] [options]
```

### Examples

```bash
# Default (uses ./documents)
pdf-time-extractor

# Custom directory
pdf-time-extractor ./documents

# Parallel processing
pdf-time-extractor ./documents --concurrency 6

# Enable debug logs
pdf-time-extractor ./documents --verbose
```

---

## ⚙️ Options

- `--concurrency <number>`
  Number of parallel workers (default: 4)

- `--verbose`
  Enable debug output

- `--help`
  Display usage information

- `--version`
  Display the current version

---

## 📂 Project Structure

```txt
src/
├── cli/           # CLI interface and argument parsing
├── core/          # Core processing logic
├── services/      # External I/O and integrations
├── utils/         # Pure utility functions
tests/             # Unit and CLI tests
.github/workflows/ # CI configuration
documents/         # Sample / input PDFs
```

---

## 🧪 Testing & CI

Run tests locally:

```bash
npm test
npm run test:coverage
```

All tests and coverage checks run automatically on every push and pull request via **GitHub Actions**.

---

## 📄 License

MIT License