# QA Automation Starter Kit

A reusable **Playwright + TypeScript** automation framework designed to quickly bootstrap new QA Automation projects.

The framework focuses on **maintainability**, **scalability**, and **standardized architecture**, making it suitable for enterprise automation projects.

---

# Features

- Playwright + TypeScript
- Page Object Model (POM)
- Layered Architecture
- BasePage / BaseComponent
- Reusable Action Layer
- Reusable Assertion Layer
- Environment Configuration
- Scalable Folder Structure
- Claude AI Ready
- Enterprise Project Ready

---

# Architecture

The framework follows a layered architecture.

```text
Tests
    │
    ▼
Pages
    │
    ▼
BasePage
    │
    ▼
BaseComponent
    │
    ▼
Actions
    │
    ▼
Playwright
```

---

# Project Structure

```text
src/
├── actions/
├── assertions/
├── components/
├── config/
├── constants/
├── core/
├── fixtures/
├── logger/
├── pages/
├── services/
├── types/
└── utils/

docs/
tests/
```

---

# Prerequisites

Before getting started, make sure you have installed:

- Node.js (LTS)
- Git
- Visual Studio Code (Recommended)

---

# Installation

Clone the repository

```bash
git clone <repository-url>
```

Go to project

```bash
cd qa-automation-starter-kit
```

Install dependencies

```bash
npm install
```

---

# Environment

Create

```text
.env
```

Example

```text
BASE_URL=

USERNAME=

PASSWORD=
```

---

# Running Tests

Run all tests

```bash
npx playwright test
```

Run in headed mode

```bash
npx playwright test --headed
```

Run a specific test

```bash
npx playwright test tests/example.spec.ts
```

Open HTML Report

```bash
npx playwright show-report
```

---

# Documentation

See the documentation inside:

```text
docs/
```

Main documents

```text
docs/

README.md

architecture/

workflow/

standards/
```

---

# Roadmap

Current Version

```text
v0.2.0
```

Next Version

```text
v0.3.0

• Assertion Layer

• Framework Entry

• Bootstrap Documentation

• Example Project
```

Long-term Goals

```text
v1.0.0

Enterprise Ready

Claude AI Ready

Project Bootstrap Ready

Production Ready
```

---

# Contributing

Contributions, suggestions, and improvements are welcome.

Please create an Issue or Pull Request before making major changes.

---

# License

MIT License
