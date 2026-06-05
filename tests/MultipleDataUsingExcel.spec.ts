import { AdminLoginPage } from "../Pages/AdminLoginPage";
import { AddEmp } from "../Pages/AddEmp";
import { AdminLogoutPage } from "../Pages/AdminLogoutPage";
import { ExcelFileUtil } from "../Utils/ExcelFileUtil";
import path from "path";
import test from "@playwright/test";

let login: AdminLoginPage;
let emp: AddEmp;
let logout: AdminLogoutPage;
let employeeData: any;
//access path of excel file
let filePath = path.join(__dirname, "../TestData/Employeedata.xlsx");
let sheetName = "HRMData";
try {
  //call Excel method
  employeeData = ExcelFileUtil.getExcelData(filePath, sheetName);
} catch (error) {
  console.log(error);
}

test.describe("Multiple Data using Excel File", () => {
  test.beforeEach(async ({ page }) => {
    login = new AdminLoginPage(page);
    await login.launchUrl(process.env.BASE_URL!);
  });
  for (const testData of employeeData) {
    test(`Add Emp with multiple data using Excel File ${testData.fname},${testData.mname}`, async ({
      page,
    }) => {
      login = new AdminLoginPage(page);
      emp = new AddEmp(page);
      await login.HRMLogin(testData.username, testData.password);
      await emp.HRM_Emp(testData.fname, testData.mname, testData.lname);
    });
  }
  test.afterEach(async ({ page }) => {
    logout = new AdminLogoutPage(page);
    await logout.HRMLogout();
  });
});
