const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext({
    geolocation: { longitude: 48.858455, latitude: 2.294474 },
    permissions: ['geolocation']
  
  });
  // Open new page
  const page = await context.newPage();
  
    await page.goto('http://browserstack.com/');
    await context.setGeolocation({
        longitude: 29.97, latitude: 31.13
      });
   await browser.close();
 })();