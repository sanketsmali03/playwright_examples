const {chromium, firefox, webkit} = require('playwright');
(async() =>{ 
for (const browserType of [chromium, firefox, webkit]) {
  const browser = await browserType.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://browserstack.com');
  await page.screenshot({path: `image-${browserType.name()}.png`});
  await browser.close();
}
})();