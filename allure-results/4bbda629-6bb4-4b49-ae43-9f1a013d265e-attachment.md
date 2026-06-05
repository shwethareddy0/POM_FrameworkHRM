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
Error: locator.waitFor: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('link', { name: 'Welcome Md', exact: true }) to be visible

```

# Test source

```ts
  1  | import { Locator, Page } from "@playwright/test";
  2  | 
  3  | export class AdminLogoutPage {
  4  |   page: Page;
  5  |   readonly ObjWelcome: Locator;
  6  |   readonly ObjLogout: Locator;
  7  |   // create a constructor
  8  |   constructor(page: Page) {
  9  |     this.page = page;
  10 |     this.ObjWelcome = page.getByRole("link", {
  11 |       name: "Welcome Md",
  12 |       exact: true,
  13 |     });
  14 |     this.ObjLogout = page.getByRole("link", { name: "Logout", exact: true });
  15 |   }
  16 |   //write method
  17 |   async HRMLogout() {
> 18 |     await this.ObjWelcome.waitFor({ state: "visible" });
     |                           ^ Error: locator.waitFor: Target page, context or browser has been closed
  19 |     await this.ObjWelcome.click();
  20 |     await this.ObjLogout.waitFor({ state: "visible" });
  21 |     await this.ObjLogout.click();
  22 |   }
  23 | }
  24 | 
```