const {chromium} = require('playwright');
(async() =>{ 
    const browser = await chromium.launch({headless:false});
for (let i = 0; i < 5; ++i) {
   // const browser = await chromium.launch({headless:false});
    const context = await browser.newContext()
  const page = await context.newPage();
  await page.goto('https://playwright.dev');
 await context.close();
await page. close();
  //browser.close();
}
 browser.close();
})();
