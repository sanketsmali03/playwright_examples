const {chromium} = require('playwright');
(async() =>{ 
for (const browserType of [chromium]) {
  const browser = await browserType.launch({headless:false,slowMo:500,devtools:true});
  const page = await browser.newPage();
  await page.goto('https://www.zomato.com/ncr',{waitUntil:'domcontentloaded'});
 // Click text=Log in
  await page.click('text=Log in');
 // Click [placeholder="Phone number"]
  await page.click('[placeholder="Phone number"]');
 // Fill [placeholder="Phone number"]
  await page.fill('[placeholder="Phone number"]', '123123562');
 // Click button[role="button"]:has-text("Send OTP")
  await page.click('button[role="button"]:has-text("Send OTP")');
  await page.close();
  await browser.close();
}
})();
  