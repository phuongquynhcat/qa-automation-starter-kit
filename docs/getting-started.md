# Getting Started

This guide helps you quickly bootstrap a new automation project using QA Automation Starter Kit.

---

# 1. Clone Repository

```bash
git clone <repository-url>
```

Go to project

```bash
cd qa-automation-starter-kit
```

---

# 2. Install Dependencies

```bash
npm install
```

Verify installation

```bash
npx playwright --version
```

---

# 3. Configure Environment

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

# 4. Verify Framework

Run TypeScript check

```bash
npx tsc --noEmit
```

Run Playwright

```bash
npx playwright test
```

Open report

```bash
npx playwright show-report
```

---

# 5. Create First Page

Location

```text
src/pages/
```

Example

```text
login.page.ts
```

The page should extend

```text
BasePage
```

---

# 6. Create First Component

Location

```text
src/components/
```

Example

```text
sidebar.ts

header.ts
```

Components should extend

```text
BaseComponent
```

---

# 7. Create First Test

Location

```text
tests/
```

Example

```text
login.spec.ts
```

---

# 8. Recommended Development Flow

Requirement

↓

Page

↓

Component

↓

Locator

↓

Action

↓

Assertion

↓

Test

↓

Report

---

# Next

Continue reading

```text
architecture.md
```
