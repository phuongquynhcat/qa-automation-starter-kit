# QA Automation Starter Kit

A reusable **Playwright + TypeScript** automation framework built for creating scalable, maintainable, and enterprise-ready web automation projects.

This starter kit provides a solid foundation with reusable components, standardized architecture, and best practices for modern QA Automation.

---

# Features

- Playwright + TypeScript
- Page Object Model (POM)
- Layered Architecture
- Reusable Action Layer
- Reusable Assertion Layer
- Locator Factory
- Environment Configuration
- Scalable Folder Structure
- Enterprise Ready

---

# Architecture

The framework follows a layered architecture.

```text
Tests
    │
    ▼
Page Objects
    │
    ▼
BasePage
    │
    ▼
BaseComponent
    │
    ▼
Action Layer
    │
    ▼
Playwright
```

---

# Project Structure

```text
qa-automation-starter-kit/

├── docs/
│
├── src/
│   ├── actions/
│   ├── assertions/
│   ├── components/
│   ├── config/
│   ├── constants/
│   ├── core/
│   ├── fixtures/
│   ├── logger/
│   ├── pages/
│   ├── services/
│   ├── types/
│   └── utils/
│
├── tests/
│
├── .env.example
├── package.json
├── playwright.config.ts
└── README.md
```

---

# Requirements

Before getting started, install:

- Node.js (LTS)
- Git

---

# Quick Start

Clone the repository

```bash
git clone <repository-url>
```

Go to the project

```bash
cd qa-automation-starter-kit
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

Create your environment file

```bash
cp .env.example .env
```

Update `.env`

```env
OHRM_BASE_URL=https://opensource-demo.orangehrmlive.com

OHRM_USERNAME=Admin

OHRM_PASSWORD=admin123
```

Run the first test

```bash
npm test
```

Expected output

```text
1 passed
0 failed
```

---

# Environment

The framework uses environment variables to separate configuration from source code.

Example:

```env
OHRM_BASE_URL=https://opensource-demo.orangehrmlive.com

OHRM_USERNAME=Admin

OHRM_PASSWORD=admin123
```

> **Important**
>
> - Never commit your `.env` file.
> - Commit only `.env.example`.

---

# Running Tests

Run all tests

```bash
npm test
```

Run in headed mode

```bash
npm run test:headed
```

Run UI Mode

```bash
npm run test:ui
```

Run Debug Mode

```bash
npm run test:debug
```

Type checking

```bash
npm run typecheck
```

Open HTML Report

```bash
npm run report
```

---

# First Test

The starter kit includes a **Golden Login Test** to verify that the framework has been configured correctly.

```text
Open Login Page
        │
        ▼
Enter Username
        │
        ▼
Enter Password
        │
        ▼
Login
        │
        ▼
Verify Dashboard
```

If this test passes, the framework is ready for automation development.

---

# Documentation

Additional documentation is available in:

```text
docs/
```

---

# License

MIT License
