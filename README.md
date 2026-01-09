# 📄 Automated PDF Time Extractor

A **Node.js automation tool** designed to batch-parse PDF reports, extract structured time-tracking data using **Regular Expressions**, and calculate aggregated totals automatically.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

---

## 💡 Context & Motivation

This project was created to solve a **real-world productivity bottleneck** encountered during a consulting engagement.

Billable hours were distributed across dozens of auto-generated, unstructured PDF reports. Manually opening each file, locating time entries, and summing values was slow, repetitive, and error-prone.

The goal was to build a **reliable, repeatable, and auditable automation** to process these files in seconds instead of hours.

---

## 🚀 What This Tool Does

The script automates the entire workflow:

- Scans a target directory for PDF files
- Parses the binary PDF content into readable text
- Extracts time patterns such as `HH:MM` using Regular Expressions
- Aggregates all extracted values into a single total
- Outputs a per-file breakdown and a global total

---

## 📂 Project Structure

    node-pdf-time-extractor/
    ├── documents/              # Input / generated PDFs
    │   └── example_report.pdf
    ├── scripts/                # Utility scripts (seed, mocks, etc.)
    │   └── generate_pdf.js
    ├── src/                    # Application source code
    │   ├── services/
    │   │   └── pdfReader.js
    │   ├── utils/
    │   │   └── timeExtractor.js
    │   ├── config.js
    │   └── index.js
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    └── README.md

---

## 🛠️ How to Run the Demo

This repository ships with a **PDF generator script** so you can reproduce the full flow locally.

### 1️⃣ Clone the repository

    git clone https://github.com/dpserretti/node-pdf-time-extractor.git
    cd node-pdf-time-extractor

### 2️⃣ Install dependencies

    npm install

### 3️⃣ Generate a sample PDF

    npm run seed

This will create a valid PDF inside the `documents/` directory containing sample time entries.

### 4️⃣ Run the extractor

    npm start

### ✅ Example output

    📄 example_report.pdf:   05h 00m
    ------------------------
    ✅ TOTAL: 5h 0m

---

## 🔍 Technical Notes

- PDF generation uses **pdfkit** to ensure a valid and parseable PDF structure
- PDF parsing is handled by **pdf-parse (v2+)**, which supports modern XRef streams
- Time extraction uses a strict Regular Expression to avoid invalid timestamps
- All file paths are resolved explicitly to ensure cross-platform compatibility

---

## 🧭 Possible Improvements

This project is intentionally minimal, but it can be extended easily:

- CLI support (`npx pdf-time-extractor`)
- JSON or CSV output formats
- Grouping totals by category (e.g. Backend, Frontend)
- Automated tests (Jest)
- GitHub Actions (CI)

---

## 📄 License

MIT License — feel free to use, modify, and adapt.
