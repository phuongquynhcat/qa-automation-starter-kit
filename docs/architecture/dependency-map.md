Overview

QA Automation Starter Kit được chia thành nhiều module độc lập.

Mỗi module chỉ phụ thuộc vào những module cần thiết.

Framework tuân theo nguyên tắc:

Low Coupling
High Cohesion
Dependency Direction
Dependency Graph
Tests
│
▼
BaseTest
│
┌──────────────────┼──────────────────┐
│ │ │
▼ ▼ ▼
Fixtures Assertions Logger
│ │ │
└──────────────┬───┴──────────────────┘
│
▼
BasePage
│
▼
BaseComponent
│
┌──────────────┼──────────────┐
│ │ │
▼ ▼ ▼
Helpers Services Utilities
│ │ │
└──────────────┼──────────────┘
▼
Config
Module Responsibilities
Config

Responsible for

Environment
Base URL
Browser
Timeout
Reporter
Project Configuration

This module has no dependency.

Utilities

Responsible for

Random
Date
File
UUID
String

Only depends on Config when necessary.

Helpers

Responsible for

Wait
Retry
Polling
Sleep
Validation

Can use Utilities.

Services

Responsible for

API Client
Authentication
Storage State
Database
Email

Can use Config and Utilities.

BaseComponent

Responsible for reusable UI blocks.

Depends on

Config
Helpers

Never depends on Page Objects.

BasePage

Responsible for common page behavior.

Depends on

BaseComponent
Helpers
Assertions
Assertions

Responsible for

UI Assertions
API Assertions
Business Assertions

Never contains business logic.

Fixtures

Responsible for

Login
Role
Test Context

Depends on

Services
Config
Logger

Responsible for

Console
File
HTML
Report Logging

Can be used by every module.

BaseTest

Responsible for

Playwright Fixtures
Hooks
Context
Browser Lifecycle

This is the highest layer of the framework.

Dependency Rules

A module may only depend on lower layers.

Allowed

BasePage

↓

Helpers

Not Allowed

Helpers

↓

BasePage

Framework must avoid circular dependency.

Golden Rule

Dependency always flows downward.

Never upward.
