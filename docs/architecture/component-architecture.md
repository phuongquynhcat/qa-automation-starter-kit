# Component Architecture

## Overview

Trong QA Automation Framework, **Component Object** đại diện cho một phần giao diện người dùng (UI) có thể được tái sử dụng trên nhiều trang.

Thay vì đặt toàn bộ locator và business logic vào Page Object, các thành phần giao diện chung sẽ được tách thành Component Object để tăng khả năng tái sử dụng và giảm trùng lặp mã nguồn.

---

# What is a Component?

Một Component là một phần giao diện độc lập của hệ thống.

Component thường:

- Xuất hiện trên nhiều trang.
- Có chức năng riêng.
- Có thể hoạt động độc lập.
- Không đại diện cho toàn bộ trang.

Ví dụ:

- Header
- Sidebar
- Navigation Menu
- User Menu
- Modal
- Table
- Pagination
- Date Picker

---

# What is a Page?

Một Page đại diện cho toàn bộ một màn hình hoặc một chức năng của hệ thống.

Ví dụ:

- Login Page
- Dashboard Page
- Admin Page
- PIM Page
- Recruitment Page

Page chịu trách nhiệm điều phối các Component và thực hiện business flow.

---

# When to use a Component?

Nên tạo Component khi phần giao diện:

- Xuất hiện trên nhiều Page.
- Có thể tái sử dụng.
- Có hành vi riêng.
- Có nhiều locator liên quan.

Ví dụ:

```
Dashboard
├── Header
├── Sidebar
└── User Menu

Admin
├── Header
├── Sidebar
└── User Menu

PIM
├── Header
├── Sidebar
└── User Menu
```

Trong trường hợp này:

- Dashboard là Page.
- Admin là Page.
- PIM là Page.
- Header là Component.
- Sidebar là Component.
- User Menu là Component.

---

# When NOT to use a Component?

Không nên tạo Component nếu phần giao diện:

- Chỉ xuất hiện ở một Page.
- Chỉ có một hoặc hai locator đơn giản.
- Không có hành vi riêng.

Ví dụ:

Login Page chỉ có:

- Username
- Password
- Login Button

Không cần tạo:

```
LoginFormComponent
```

vì sẽ làm tăng độ phức tạp mà không mang lại lợi ích.

---

# Component Design Principles

## Single Responsibility Principle

Mỗi Component chỉ nên chịu trách nhiệm cho chính nó.

Ví dụ:

Sidebar chỉ quản lý:

- Menu
- Navigation
- Expand / Collapse

Không nên chứa logic Logout hoặc User Profile.

---

## Reusability

Một Component phải có khả năng tái sử dụng.

Ví dụ:

```
SidebarComponent
```

có thể được sử dụng bởi:

- Dashboard
- Admin
- PIM
- Leave
- Recruitment

---

## Encapsulation

Locator của Component không được truy cập trực tiếp từ bên ngoài.

Ví dụ:

Đúng:

```ts
await dashboard.sidebar.openAdmin();
```

Không nên:

```ts
await dashboard.sidebar.adminMenu.click();
```

Component nên che giấu chi tiết triển khai bên trong.

---

## Clear Responsibility

Component chỉ xử lý giao diện của chính nó.

Ví dụ:

Header Component:

- Open User Menu
- Logout
- Change Language

Sidebar Component:

- Open Admin
- Open PIM
- Open Leave

Không nên gọi API hoặc thực hiện business logic không liên quan.

---

# Base Component

Tất cả Component nên kế thừa từ:

```
BaseComponent
```

Ví dụ:

```ts
export class SidebarComponent extends BaseComponent {}
```

Điều này giúp tất cả Component có chung nền tảng và coding convention.

---

# Examples

## Header Component

Chứa các chức năng:

- Open User Menu
- Logout
- Switch Language
- View Profile

---

## Sidebar Component

Chứa các chức năng:

- Open Dashboard
- Open Admin
- Open PIM
- Open Leave
- Open Recruitment

---

## Modal Component

Chứa các chức năng:

- Confirm
- Cancel
- Close
- Get Message

---

## Table Component

Chứa các chức năng:

- Get Row
- Get Cell
- Search
- Sort
- Select Row

---

## Pagination Component

Chứa các chức năng:

- Next Page
- Previous Page
- Go To Page
- Get Current Page

---

# Relationship between Page and Component

```
DashboardPage
│
├── HeaderComponent
├── SidebarComponent
└── UserMenuComponent
```

Page chịu trách nhiệm điều phối.

Component chịu trách nhiệm thao tác với giao diện của chính nó.

---

# Benefits

Sử dụng Component Object mang lại nhiều lợi ích:

- Giảm trùng lặp mã nguồn.
- Dễ bảo trì.
- Dễ mở rộng.
- Dễ tái sử dụng.
- Giúp Page Object ngắn gọn và rõ ràng.
- Phù hợp với các hệ thống có nhiều giao diện dùng chung.

---

# Best Practices

- Một Component chỉ nên quản lý một phần giao diện.
- Không nhúng Component vào Component khác nếu không thực sự cần thiết.
- Không đặt business logic của Page trong Component.
- Không truy cập locator của Component từ bên ngoài.
- Ưu tiên sử dụng Component khi UI được tái sử dụng trên nhiều Page.

---

# Summary

| Object    | Responsibility                                                                                             |
| --------- | ---------------------------------------------------------------------------------------------------------- |
| Page      | Đại diện cho một màn hình hoặc chức năng của hệ thống. Điều phối các Component và thực hiện business flow. |
| Component | Đại diện cho một phần giao diện có thể tái sử dụng trên nhiều Page. Chỉ quản lý giao diện của chính nó.    |

---

Component Object là một phần quan trọng trong kiến trúc của QA Automation Starter Kit. Việc tách Component khỏi Page giúp framework dễ bảo trì, dễ mở rộng và phù hợp với các dự án có quy mô từ nhỏ đến lớn.
