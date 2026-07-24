QA Automation Starter Kit Architecture

1. Vision
   Mục tiêu

QA Automation Starter Kit là một framework độc lập, có thể được clone sang bất kỳ dự án nào để phát triển automation testing mà không phụ thuộc vào source code của frontend hoặc backend.

Framework được thiết kế với ba mục tiêu:

Reusable
Maintainable
AI Friendly

Framework không phục vụ một hệ thống cụ thể mà phục vụ mọi hệ thống.

2. Design Principles

Framework được xây dựng theo các nguyên tắc sau:

2.1 Zero Business Knowledge

Framework không được chứa bất kỳ nghiệp vụ nào.

Ví dụ:

❌ Không được có

LoginPage
DashboardPage
EmployeePage
OrangeHRM
Admin

Framework chỉ được chứa:

BasePage
BaseComponent
BaseTest
Config
Logger
Utilities
Helpers
Services

2.2 Reusable

Mọi module trong framework phải có thể tái sử dụng cho mọi dự án.

Nếu một module chỉ dùng được cho một hệ thống thì nó không thuộc Starter Kit.

2.3 AI First

Framework phải được thiết kế để Claude AI hoặc ChatGPT có thể:

hiểu kiến trúc
sinh code
review code
tái sử dụng template

mà không cần giải thích nhiều lần.

3. Architecture Layers

Framework được chia thành hai tầng.

Layer 1 — Framework
src/

config/
core/
components/
helpers/
utils/
fixtures/
services/
logger/
assertions/
constants/
types/

Đây là phần không thay đổi giữa các dự án.

Layer 2 — Project

Khi clone Starter Kit sang công ty sẽ sinh:

pages/
components/
tests/
test-data/
resources/

Đây là phần phụ thuộc vào nghiệp vụ.

Không thuộc Starter Kit.

4. Repository Structure
   qa-automation-starter-kit/

src/
docs/
ai/

README.md
package.json
playwright.config.ts

Starter Kit không chứa Page Object của một hệ thống cụ thể.

5. Clone Workflow
   Starter Kit

↓

Clone Repository

↓

Rename Repository

↓

Config .env

↓

Create Pages

↓

Create Tests

↓

Run Automation

Không cần clone frontend.

Không cần clone backend.

6. Module Development Rule

Mỗi module phải có đầy đủ:

Code

↓

Documentation

↓

AI Rule

Ví dụ:

src/config/

↓

docs/modules/config.md

↓

docs/ai/config.rule.md

7. File Classification

Trước khi tạo một file mới phải trả lời:

File này thuộc Framework hay Project?

Ví dụ:

Framework

BasePage
BaseComponent
Logger
ApiClient
RandomUtil

Project

LoginPage
DashboardPage
EmployeePage
LeavePage

8. Long-term Goal

Sau khi hoàn thành Framework:

Clone Starter Kit

↓

Clone sang project mới

↓

Claude AI

↓

Generate Pages

↓

Generate Components

↓

Generate Tests

↓

Run Playwright
