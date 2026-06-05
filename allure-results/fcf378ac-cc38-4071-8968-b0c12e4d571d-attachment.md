# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MultipleDataUsingJson.spec.ts >> Multiple Data Using Json File >> Add Emp with multiple data Claire
- Location: tests/MultipleDataUsingJson.spec.ts:20:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#firstName') to be visible
    - waiting for" http://orangehrm.qedgetech.com/symfony/web/index.php/auth/logout" navigation to finish...
    - navigated to "http://orangehrm.qedgetech.com/symfony/web/index.php/auth/login"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - textbox [ref=e5]
  - generic [ref=e6]:
    - img [ref=e8]
    - img [ref=e11]
```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test";
  2  | import path from "path";
  3  | 
  4  | const imagePath = path.join(__dirname, "./TestData/Emp_Photo Icon.png");
  5  | export class AddEmp {
  6  |   private page: Page;
  7  |   readonly ObjPim: Locator;
  8  |   readonly ObjAdd: Locator;
  9  |   readonly ObjFname: Locator;
  10 |   readonly ObjMname: Locator;
  11 |   readonly ObjLname: Locator;
  12 |   readonly ObjEmpID: Locator;
  13 |   readonly ObjPhotograph: Locator;
  14 |   readonly ObjSave: Locator;
  15 |   readonly ObjEmpDisplayID: Locator;
  16 |   //Constructor
  17 |   constructor(page: Page) {
  18 |     this.page = page;
  19 |     this.ObjPim = page.getByRole("link", { name: "PIM" });
  20 |     this.ObjAdd = page.getByRole("button", { name: "Add" });
  21 |     this.ObjFname = page.locator("#firstName");
  22 |     this.ObjMname = page.locator("#middleName");
  23 |     this.ObjLname = page.locator("#lastName");
  24 |     this.ObjEmpID = page.locator("#employeeId");
  25 |     this.ObjPhotograph = page.locator("input.duplexBox");
  26 |     this.ObjSave = page.getByRole("button", { name: "Save" });
  27 |     this.ObjEmpDisplayID = page.locator("#personal_txtEmployeeId");
  28 |   }
  29 |   //write method for add employee firstname,middlename and lastname
  30 |   async HRM_Emp(fname: string, mname: string, lname: string) {
  31 |     await this.ObjPim.waitFor({ state: "visible" });
  32 |     await this.ObjPim.click();
  33 |     await this.ObjAdd.waitFor({ state: "visible" });
  34 |     await this.ObjAdd.click();
> 35 |     await this.ObjFname.waitFor({ state: "visible" });
     |                         ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  36 |     await this.ObjFname.fill(fname);
  37 |     await this.ObjMname.fill(mname);
  38 |     await this.ObjLname.fill(lname);
  39 |     //capture employee id
  40 |     const Exp_ID = await this.ObjEmpID.inputValue();
  41 |     await this.ObjPhotograph.waitFor({ state: "visible" });
  42 |     await this.page.waitForTimeout(4000);
  43 |     // await this.ObjPhotograph.setInputFiles(imagePath);
  44 |     await this.page.waitForTimeout(2000);
  45 |     await this.ObjSave.click();
  46 |     //capture emp display id
  47 |     await this.ObjEmpDisplayID.waitFor({ state: "visible" });
  48 |     const Act_ID = await this.ObjEmpDisplayID.inputValue();
  49 |     expect(Act_ID).toBe(Exp_ID);
  50 |     console.log(`Employess Added Successfully ${Act_ID} ${Exp_ID}`);
  51 |     return Act_ID;
  52 |   }
  53 | }
  54 | 
```