import { AdminLoginPage } from "../Pages/AdminLoginPage";
import { AddEmp } from "../Pages/AddEmp";
import { AdminLogoutPage } from "../Pages/AdminLogoutPage";
import EmployeeData from "../TestData/Employee.json";
import test from "@playwright/test";

test.describe("Multiple Data Using Json File", () => {
  let login: AdminLoginPage;
  let emp: AddEmp;
  let logout: AdminLogoutPage;
  test.beforeEach(async ({ page }) => {
    login = new AdminLoginPage(page);
    await login.launchUrl(process.env.BASE_URL!);
    await login.HRMLogin(process.env.BASE_USER!, process.env.BASE_PASS!);
  });
  for (const data of EmployeeData) {
    test(`Add Emp with multiple data ${data.firstName}`, async ({ page }) => {
      emp = new AddEmp(page);
      await emp.HRM_Emp(data.firstName, data.middleName, data.lastName);
    });
  }
  test.afterEach(async ({ page }) => {
    logout = new AdminLogoutPage(page);
    await logout.HRMLogout();
  });
});
