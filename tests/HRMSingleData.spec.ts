import { AdminLoginPage } from "../Pages/AdminLoginPage";
import { AddEmp } from "../Pages/AddEmp";
import { AdminLogoutPage } from "../Pages/AdminLogoutPage";
import test from "@playwright/test";

test.describe("HRM Employee Management", () => {
  let login: AdminLoginPage;
  let emp: AddEmp;
  let logout: AdminLogoutPage;
  test.beforeEach(async ({ page }) => {
    login = new AdminLoginPage(page);
    await login.launchUrl(process.env.BASE_URL!);
    await login.HRMLogin(process.env.BASE_USER!, process.env.BASE_PASS!);
  });
  test("Add Employee", async ({ page }) => {
    emp = new AddEmp(page);
    await emp.HRM_Emp("John", "Joe", "Smith");
  });
  test.afterEach(async ({ page }) => {
    logout = new AdminLogoutPage(page);
    await logout.HRMLogout();
    await page.close();
  });
});
