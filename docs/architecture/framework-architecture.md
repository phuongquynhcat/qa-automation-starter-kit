# QA Automation Starter Kit Architecture

## Purpose

QA Automation Starter Kit được xây dựng để giúp Manual Tester và Automation Tester phát triển một framework kiểm thử tự động theo chuẩn, sử dụng Playwright, TypeScript và AI hỗ trợ.

Mục tiêu của Starter Kit không chỉ là viết automation test mà còn chuẩn hóa toàn bộ quy trình từ Requirement đến Release.

---

# Design Principles

Framework được thiết kế dựa trên các nguyên tắc sau:

## 1. Simplicity First

Ưu tiên cấu trúc đơn giản.

Không tạo thư mục hoặc thành phần khi chưa có nhu cầu thực tế.

---

## 2. Incremental Growth

Framework được mở rộng theo từng Sprint.

Chỉ bổ sung module mới khi thực sự cần.

---

## 3. Separation of Concerns

Mỗi thư mục chỉ có một trách nhiệm.

Ví dụ:

- pages chỉ chứa Page Object
- utils chỉ chứa hàm dùng chung
- config chỉ chứa cấu hình

---

## 4. Reusability

Mọi thành phần đều hướng đến khả năng tái sử dụng.

Không lặp lại code.

---

## 5. Maintainability

Framework phải dễ đọc, dễ sửa và dễ mở rộng.

Người mới có thể hiểu cấu trúc trong thời gian ngắn.

---

## 6. AI Friendly

Toàn bộ cấu trúc, quy ước và tài liệu được chuẩn hóa để AI (Claude hoặc ChatGPT) có thể:

- phân tích requirement
- sinh checklist
- sinh test case
- sinh Page Object
- sinh Playwright code

một cách nhất quán.

---

# Framework Layers

Framework được chia thành các tầng.

Requirement

↓

QA Process

↓

Automation Framework

↓

Playwright

↓

Browser

↓

Application

↓

Report

---

# Project Structure

Project được chia thành ba phần chính.

## AI

Chứa prompt, command, template và rule dành cho AI.

## Documentation

Chứa tài liệu thiết kế, tiêu chuẩn và quy trình.

## Source Code

Chứa framework automation.

---

# Architecture Evolution

Framework không được xây đầy đủ ngay từ đầu.

Nó phát triển theo từng Sprint.

Sprint 1

Foundation

Sprint 2

Framework

Sprint 3

Authentication

Sprint 4

Feature Automation

Sprint 5

AI Workflow & Release

---

# Goal

Sau khi hoàn thành Starter Kit, người học có thể:

- hiểu QA Automation Framework
- xây dựng Playwright Framework
- áp dụng AI vào Automation Testing
- mở rộng framework cho dự án thực tế
