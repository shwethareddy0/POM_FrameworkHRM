import { Locator, Page } from "@playwright/test";

export class AdminLogoutPage {
  page: Page;
  readonly ObjWelcome: Locator;
  readonly ObjLogout: Locator;
  // create a constructor
  constructor(page: Page) {
    this.page = page;
    this.ObjWelcome = page.getByRole("link", {
      name: "Welcome Md",
      exact: true,
    });
    this.ObjLogout = page.getByRole("link", { name: "Logout", exact: true });
  }
  //write method
  async HRMLogout() {
    await this.ObjWelcome.waitFor({ state: "visible" });
    await this.ObjWelcome.click();
    await this.ObjLogout.waitFor({ state: "visible" });
    await this.ObjLogout.click();
  }
}
