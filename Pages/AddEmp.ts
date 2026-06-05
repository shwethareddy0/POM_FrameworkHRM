import { expect, Locator, Page } from "@playwright/test";
import path from "path";

export class AddEmp {
  private page: Page;
  readonly ObjPim: Locator;
  readonly ObjAdd: Locator;
  readonly ObjFname: Locator;
  readonly ObjMname: Locator;
  readonly ObjLname: Locator;
  readonly ObjEmpID: Locator;
  readonly ObjPhotograph: Locator;
  readonly ObjSave: Locator;
  readonly ObjEmpDisplayID: Locator;
  //Constructor
  constructor(page: Page) {
    this.page = page;
    this.ObjPim = page.getByRole("link", { name: "PIM" });
    this.ObjAdd = page.getByRole("button", { name: "Add" });
    this.ObjFname = page.locator("#firstName");
    this.ObjMname = page.locator("#middleName");
    this.ObjLname = page.locator("#lastName");
    this.ObjEmpID = page.locator("#employeeId");
    this.ObjPhotograph = page.locator("input.duplexBox");
    this.ObjSave = page.getByRole("button", { name: "Save" });
    this.ObjEmpDisplayID = page.locator("#personal_txtEmployeeId");
  }
  //write method for add employee firstname,middlename and lastname
  async HRM_Emp(fname: string, mname: string, lname: string) {
    await this.ObjPim.waitFor({ state: "visible" });
    await this.ObjPim.click();
    await this.ObjAdd.waitFor({ state: "visible" });
    await this.ObjAdd.click();
    await this.ObjFname.waitFor({ state: "visible" });
    await this.ObjFname.fill(fname);
    await this.ObjMname.fill(mname);
    await this.ObjLname.fill(lname);
    //capture employee id
    const Exp_ID = await this.ObjEmpID.inputValue();
    await this.ObjPhotograph.waitFor({ state: "visible" });
    await this.page.waitForTimeout(4000);
    await this.ObjPhotograph.setInputFiles("./TestData/Emp_Photo Icon.png");
    await this.page.waitForTimeout(2000);
    await this.ObjSave.click();
    //capture emp display id
    await this.ObjEmpDisplayID.waitFor({ state: "visible" });
    const Act_ID = await this.ObjEmpDisplayID.inputValue();
    expect(Act_ID).toBe(Exp_ID);
    console.log(`Employee Added Successfully ${Act_ID} ${Exp_ID}`);
    return Act_ID;
  }
}
