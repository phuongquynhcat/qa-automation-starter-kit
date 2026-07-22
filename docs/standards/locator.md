# Locator Strategy

## Purpose

Tài liệu này định nghĩa tiêu chuẩn lựa chọn Locator trong QA Automation Starter Kit.

Rule:

- Locator chỉ được phép tồn tại trong Page Object hoặc Component Object.

Mục tiêu:

- Tăng tính ổn định của test.
- Dễ đọc.
- Dễ bảo trì.
- Giảm flakiness.
- Thống nhất coding style trong toàn bộ framework.

---

# Priority

## 1. getByRole ⭐⭐⭐⭐⭐ (Recommended)

Ưu tiên sử dụng cho Button, Link, Checkbox, Radio, Menu,...

Ví dụ:

```ts
page.getByRole("button", { name: "Login" });
```

---

## 2. getByLabel ⭐⭐⭐⭐⭐

Sử dụng cho Input có Label.

Ví dụ:

```ts
page.getByLabel("Username");
```

---

## 3. getByPlaceholder ⭐⭐⭐⭐☆

Ví dụ:

```ts
page.getByPlaceholder("Search");
```

---

## 4. getByText ⭐⭐⭐⭐☆

Ví dụ:

```ts
page.getByText("Dashboard");
```

---

## 5. getByTestId ⭐⭐⭐☆

Chỉ sử dụng khi project có quy ước `data-testid`.

Ví dụ:

```ts
page.getByTestId("login-button");
```

---

## 6. locator(css) ⭐⭐⭐

Sử dụng khi các phương pháp trên không khả dụng.

Ví dụ:

```ts
page.locator("input[name='username']");
```

---

## 7. XPath ⭐☆

Chỉ sử dụng khi không còn lựa chọn khác.

Ví dụ:

```ts
page.locator("//button[text()='Login']");
```

---

# Avoid

Không sử dụng các locator dễ vỡ như:

```ts
page.locator("div:nth-child(3)");
```

```ts
page.locator("body > div > div > div");
```

```ts
page.locator("#root > div:nth-child(5)");
```

```ts
page.locator("table tr:nth-child(8)");
```

---

# Best Practices

- Ưu tiên Locator mang ý nghĩa nghiệp vụ.
- Không phụ thuộc vào cấu trúc HTML.
- Không phụ thuộc vào vị trí của phần tử.
- Locator phải ổn định khi UI thay đổi nhỏ.
- Chỉ dùng XPath khi thật sự cần thiết.

---

# OrangeHRM Example

Hiện tại OrangeHRM Demo chủ yếu sử dụng CSS Selector.

Ví dụ:

```ts
this.usernameInput = this.page.locator("input[name='username']");

this.passwordInput = this.page.locator("input[name='password']");

this.loginButton = this.page.locator("button[type='submit']");
```

Nếu hệ thống hỗ trợ Accessibility hoặc `data-testid`, ưu tiên sử dụng theo thứ tự đã định nghĩa trong tài liệu này.
