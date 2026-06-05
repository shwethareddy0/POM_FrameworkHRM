# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MultipleDataUsingJson.spec.ts >> Multiple Data Using Json File >> Add Emp with multiple data Alice
- Location: tests/MultipleDataUsingJson.spec.ts:24:9

# Error details

```
Error: locator.waitFor: Test ended.
Call log:
  - waiting for locator('#txtUsername') to be visible

```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test";
  2  | import { url } from "inspector";
  3  | 
  4  | export class AdminLoginPage {
  5  |   //Declare variables for login
  6  |   readonly page: Page;
  7  |   readonly ObjUser: Locator;
  8  |   readonly ObjPass: Locator;
  9  |   readonly ObjLogin: Locator;
  10 |   //create a constructor to initialize values for above variables
  11 |   constructor(page: Page) {
  12 |     this.page = page;
  13 |     this.ObjUser = page.locator("#txtUsername");
  14 |     this.ObjPass = page.locator("#txtPassword");
  15 |     this.ObjLogin = page.getByRole("button", { name: "LOGIN", exact: true });
  16 |   }
  17 |   //Method for launching URL
  18 |   async launchUrl(Url: string) {
  19 |     await this.page.goto(Url);
  20 |   }
  21 |   //method for login
  22 |   async HRMLogin(user: string, pass: string) {
  23 |     await this.page.waitForLoadState("load");
> 24 |     await this.ObjUser.waitFor({ state: "visible" });
     |                        ^ Error: locator.waitFor: Test ended.
  25 |     await this.ObjUser.fill(user);
  26 |     await this.ObjPass.waitFor({ state: "visible" });
  27 |     await this.ObjPass.fill(pass);
  28 |     await this.ObjLogin.click();
  29 |     await expect(this.page).toHaveURL(/dashboard/);
  30 |   }
  31 | }
  32 | 
```