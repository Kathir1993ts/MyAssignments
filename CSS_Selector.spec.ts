import { test } from "@playwright/test";
import { log } from "console";

test(`Leaftaps Website`, async ({page}) =>  {

    await page.goto('http://leaftaps.com/opentaps/control/main');
    await page.locator('[id="username"]').fill('Demosalesmanager')
    await page.locator('[id="password"]').fill("crmsfa")
    await page.locator('[type="submit"]').click()
    await page.locator('[id="label"]').click()
    await page.getByRole('link',{name:'Leads'}).click()
    await page.getByRole('link',{name:'Create Lead'}).click()
    await page.locator('[id="createLeadForm_companyName"]').fill("TestLeaf")
    await page.locator('[id="createLeadForm_firstName"]').fill("Kathir")
    await page.locator('[id="createLeadForm_lastName"]').fill("S")
    await page.locator('[id="createLeadForm_personalTitle"]').fill("Mr")
    await page.locator('[id="createLeadForm_generalProfTitle"]').fill("Kathir")
    await page.locator('[id="createLeadForm_annualRevenue"]').fill("1000000")
    await page.locator('[id="createLeadForm_departmentName"]').fill("Test")
    await page.locator('[id="createLeadForm_primaryPhoneNumber"]').fill("1234567890")
    await page.locator('[name="submitButton"]').click()

    let title = page.url()
    await page.waitForTimeout(3000)
    console.log("Connected to "+title)
     
 })