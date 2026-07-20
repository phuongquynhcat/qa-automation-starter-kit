# Folder Structure

## Purpose

Tài liệu này mô tả cấu trúc thư mục của QA Automation Starter Kit và trách nhiệm của từng thư mục.

Nguyên tắc:

- Một thư mục chỉ có một trách nhiệm.
- Chỉ tạo thư mục khi thực sự cần.
- Không tạo thư mục trống để "dự phòng".

---

# Root Structure

```
QA-AUTOMATION-STARTER-KIT
│
├── ai/
├── docs/
├── src/
├── tests/
│
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

---

# ai/

Chứa toàn bộ tài nguyên phục vụ AI.

Bao gồm:

- commands
- prompts
- rules
- templates

AI không đọc source code trước.

AI đọc các quy tắc ở đây trước.

---

# docs/

Chứa toàn bộ tài liệu.

Không chứa source code.

---

# src/

Chứa framework.

Không chứa test case.

Hiện tại gồm:

- config
- pages
- utils

Framework sẽ được mở rộng theo từng Sprint.

---

# tests/

Chứa Playwright Test.

Mỗi test chỉ nên:

- gọi Page Object
- verify
- không chứa business logic

---

# package.json

Quản lý dependency và scripts.

---

# playwright.config.ts

Cấu hình Playwright Framework.

---

# tsconfig.json

Cấu hình TypeScript.

---

# Evolution

Không tạo sẵn:

- components
- fixtures
- data
- helpers
- constants
- types

Những thư mục này chỉ xuất hiện khi có nhu cầu thực tế.
