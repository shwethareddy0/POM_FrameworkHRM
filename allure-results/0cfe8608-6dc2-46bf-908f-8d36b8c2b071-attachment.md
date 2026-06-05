# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HRMSingleData.spec.ts >> HRM Employee Manager >> Add Employee
- Location: tests/HRMSingleData.spec.ts:15:7

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "Url", waiting until "load"

```

```
Test timeout of 30000ms exceeded while running "afterEach" hook.
```

# Test source

```ts
  1  | import { AdminLoginPage } from "../Pages/AdminLoginPage";
  2  | import { AddEmp } from "../Pages/AddEmp";
  3  | import { AdminLogoutPage } from "../Pages/AdminLogoutPage";
  4  | import test from "@playwright/test";
  5  | 
  6  | test.describe("HRM Employee Manager", () => {
  7  |   let login: AdminLoginPage;
  8  |   let emp: AddEmp;
  9  |   let logout: AdminLogoutPage;
  10 |   test.beforeEach(async ({ page }) => {
  11 |     login = new AdminLoginPage(page);
  12 |     await login.launchUrl(process.env.BASE_URL!);
  13 |     await login.HRMLogin(process.env.BASE_USER!, process.env.BASE_PASS!);
  14 |   });
  15 |   test("Add Employee", async ({ page }) => {
  16 |     emp = new AddEmp(page);
  17 |     await emp.HRM_Emp("John", "Joe", "Smith");
  18 |   });
> 19 |   test.afterEach(async ({ page }) => {
     |        ^ Test timeout of 30000ms exceeded while running "afterEach" hook.
  20 |     logout = new AdminLogoutPage(page);
  21 |     await logout.HRMLogout();
  22 |     await page.close();
  23 |   });
  24 | });
  25 | 
```