const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false,
    channel: 'chrome'
  });
  
  // Open new page
  const page = await context.newPage();
  
 await page.goto('http://browserstack.com/');
  
  // await browser.close();
 })();