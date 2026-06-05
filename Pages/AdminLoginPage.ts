import { expect, Locator, Page } from "@playwright/test";
import { url } from "inspector";

export class AdminLoginPage {
  //Declare variables for login
  readonly page: Page;
  readonly ObjUser: Locator;
  readonly ObjPass: Locator;
  readonly ObjLogin: Locator;
  //create a constructor to initialize values for above variables
  constructor(page: Page) {
    this.page = page;
    this.ObjUser = page.locator("#txtUsername");
    this.ObjPass = page.locator("#txtPassword");
    this.ObjLogin = page.getByRole("button", { name: "LOGIN", exact: true });
  }
  //Method for launching URL
  async launchUrl(Url: string) {
    await this.page.goto(Url);
  }
  //method for login
  async HRMLogin(user: string, pass: string) {
    await this.page.waitForLoadState("load");
    await this.ObjUser.waitFor({ state: "visible" });
    await this.ObjUser.fill(user);
    await this.ObjPass.waitFor({ state: "visible" });
    await this.ObjPass.fill(pass);
    await this.ObjLogin.click();
    await expect(this.page).toHaveURL(/dashboard/);
  }
}
