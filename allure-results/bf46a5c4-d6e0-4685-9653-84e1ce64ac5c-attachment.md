# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: MultipleDataUsingJson.spec.ts >> Multiple Data Using Json File >> Add Emp with multiple data Alice
- Location: tests/MultipleDataUsingJson.spec.ts:24:9

# Error details

```
Error: ENOENT: no such file or directory, stat '/Users/swethapothuganti/DEV/POM-FrameWorkHRM/Pages/TestData/Emp_Photo Icon.png'
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - textbox [ref=e5]
  - generic [ref=e6]:
    - img [ref=e8]
    - generic [ref=e9]:
      - img [ref=e11]
      - generic [ref=e39]:
        - generic [ref=e40]: LOGIN Panel
        - generic [ref=e41]:
          - textbox [ref=e42]
          - text: Username
        - generic [ref=e43]:
          - textbox [ref=e44]
          - text: Password
        - generic [ref=e46]:
          - button "LOGIN" [ref=e47] [cursor=pointer]
          - link "Forgot your password?" [ref=e49] [cursor=pointer]:
            - /url: /symfony/web/index.php/auth/requestPasswordResetCode
  - generic [ref=e52]:
    - text: "Alternative Login :"
    - combobox [ref=e53]:
      - option "-- Select --" [selected]
    - button "Login" [disabled] [ref=e54]
  - generic [ref=e55]:
    - generic [ref=e56]:
      - text: OrangeHRM 4.10.1
      - text: © 2005 - 2026
      - link "OrangeHRM, Inc" [ref=e57] [cursor=pointer]:
        - /url: http://www.orangehrm.com
      - text: . All rights reserved.
    - generic [ref=e58]:
      - link "LinkedIn OrangeHRM group" [ref=e59] [cursor=pointer]:
        - /url: http://www.linkedin.com/groups?home=&gid=891077
        - img "LinkedIn OrangeHRM group" [ref=e60]
      - link "OrangeHRM on Facebook" [ref=e61] [cursor=pointer]:
        - /url: http://www.facebook.com/OrangeHRM
        - img "OrangeHRM on Facebook" [ref=e62]
      - link "OrangeHRM on twitter" [ref=e63] [cursor=pointer]:
        - /url: http://twitter.com/orangehrm
        - img "OrangeHRM on twitter" [ref=e64]
      - link "OrangeHRM on youtube" [ref=e65] [cursor=pointer]:
        - /url: http://www.youtube.com/orangehrm
        - img "OrangeHRM on youtube" [ref=e66]
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
  35 |     await this.ObjFname.waitFor({ state: "visible" });
  36 |     await this.ObjFname.fill(fname);
  37 |     await this.ObjMname.fill(mname);
  38 |     await this.ObjLname.fill(lname);
  39 |     //capture employee id
  40 |     const Exp_ID = await this.ObjEmpID.inputValue();
  41 |     await this.ObjPhotograph.waitFor({ state: "visible" });
  42 |     await this.page.waitForTimeout(4000);
> 43 |     await this.ObjPhotograph.setInputFiles(imagePath);
     |     ^ Error: ENOENT: no such file or directory, stat '/Users/swethapothuganti/DEV/POM-FrameWorkHRM/Pages/TestData/Emp_Photo Icon.png'
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