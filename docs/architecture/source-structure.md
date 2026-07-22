# Source Structure

Tài liệu này mô tả vai trò và trách nhiệm của từng thư mục trong `src/`.

Mục tiêu là giúp mọi thành viên trong dự án sử dụng framework một cách thống nhất và dễ mở rộng.

---

# components

Chứa các **Component Object** có thể tái sử dụng trên nhiều trang.

Một Component đại diện cho một phần giao diện độc lập, không phải toàn bộ trang.

## Ví dụ

- Sidebar
- Header
- Top Navigation
- User Menu
- Modal
- Dialog
- Table
- Pagination
- Date Picker

## Quy tắc

- Không chứa business logic.
- Chỉ thao tác với component của chính nó.
- Có thể được sử dụng bởi nhiều Page Object.

---

# config

Chứa các cấu hình của framework.

## Ví dụ

- Environment
- Browser Configuration
- Playwright Configuration
- Global Settings

## Quy tắc

- Không chứa business logic.
- Không chứa test data.
- Chỉ lưu các giá trị cấu hình.

---

# constants

Chứa các hằng số dùng chung trong toàn bộ framework.

## Ví dụ

- Routes
- Roles
- Messages
- Timeout Values
- Browser Names

## Quy tắc

- Không hard-code giá trị trong code.
- Mọi giá trị dùng nhiều lần nên được đưa vào constants.

---

# core

Chứa các class nền tảng của framework.

Đây là "xương sống" của Starter Kit.

## Ví dụ

- BasePage
- BaseComponent
- BaseTest

## Quy tắc

- Không chứa logic của từng module.
- Chỉ chứa các chức năng dùng chung.

---

# fixtures

Chứa Playwright Fixtures.

Fixture giúp khởi tạo dữ liệu hoặc trạng thái trước khi chạy test.

## Ví dụ

- Auth Fixture
- User Fixture
- Browser Fixture
- API Fixture

## Quy tắc

- Chỉ dùng để chuẩn bị dữ liệu hoặc môi trường test.
- Không chứa business logic.

---

# helpers

Chứa các helper xử lý nghiệp vụ hoặc logic hỗ trợ.

Helper thường thực hiện nhiều bước để hoàn thành một tác vụ.

## Ví dụ

- Retry Helper
- Wait Helper
- Download Helper
- Upload Helper
- Validation Helper

## Quy tắc

- Có thể kết hợp nhiều utility.
- Có thể chứa logic xử lý.
- Không phụ thuộc vào UI cụ thể.

---

# services

Chứa các lớp làm việc với hệ thống bên ngoài.

## Ví dụ

- API Service
- Database Service
- Email Service
- File Service

## Quy tắc

- Không thao tác trực tiếp với giao diện.
- Chỉ giao tiếp với external systems.

---

# types

Chứa các kiểu dữ liệu dùng trong framework.

## Ví dụ

- User
- Employee
- Candidate
- Leave
- API Response

## Quy tắc

- Chỉ khai báo interface hoặc type.
- Không chứa logic xử lý.

---

# utils

Chứa các hàm tiện ích độc lập.

Utility thường chỉ thực hiện một chức năng nhỏ và có thể tái sử dụng.

## Ví dụ

- Date Utility
- Random Utility
- File Utility
- String Utility
- Number Utility

## Quy tắc

- Mỗi hàm chỉ nên thực hiện một nhiệm vụ.
- Không chứa business logic.
- Không phụ thuộc vào Playwright nếu không cần thiết.

---

# Folder Responsibility Summary

| Folder     | Responsibility                |
| ---------- | ----------------------------- |
| components | Reusable UI components        |
| config     | Framework configuration       |
| constants  | Shared constant values        |
| core       | Base classes of the framework |
| fixtures   | Playwright fixtures           |
| helpers    | Business and workflow helpers |
| services   | External system integrations  |
| types      | Shared interfaces and types   |
| utils      | Reusable utility functions    |

---

# Design Principles

- Single Responsibility Principle (SRP): Mỗi thư mục chỉ có một trách nhiệm chính.
- Reusability: Mọi thành phần nên được thiết kế để có thể tái sử dụng.
- Separation of Concerns: Tách biệt UI, Business Logic và Framework.
- Maintainability: Dễ bảo trì và mở rộng.
- Scalability: Dễ dàng áp dụng cho nhiều dự án khác nhau.

Tài liệu này là quy chuẩn cho toàn bộ QA Automation Starter Kit. Mọi mã nguồn mới cần tuân theo cấu trúc và nguyên tắc được mô tả trong tài liệu này.
