const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();
  await page.route('**\/*.{png,jpg,jpeg,svg}',(request) => {
    if(request.request().resourceType() === 'image') {
        request.abort();
    }
    else {
        request.continue();
    }
  });
    await page.goto('http://amazon.com/');
   //await browser.close();
 })();