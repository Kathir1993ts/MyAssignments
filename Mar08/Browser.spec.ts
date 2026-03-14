import { chromium, firefox, test } from "@playwright/test";
import { fail } from "node:assert";

test("To launch a Edge browser", async () => {
const browserInstance = await chromium.launch({channel:"msedge",headless:false});
const browserContext = await browserInstance.newContext();
const page = await browserContext.newPage();

await page.goto("https://www.redbus.in");
await page.waitForTimeout(5000);
let title = await page.title();
let url = page.url();
console.log("Connected to "+title+" and "+url);
});

test("To launch a Firefox browser", async () => {
const browserInstance = await firefox.launch({headless:false});
const browserContext = await browserInstance.newContext();
const page = await browserContext.newPage();

await page.goto("https://www.flipkart.com");
await page.waitForTimeout(5000);
let title = await page.title();
let url = page.url();
console.log("Connected to "+title+" and "+url);
});

