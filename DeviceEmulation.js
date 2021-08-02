const {chromium,devices} = require('playwright');
(async() =>{ 

    const iPhone = devices['iPhone 11 Pro Max']
    const browser = await chromium.launch({
        headless: false,
        executablePath: "/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"
    });
    const context = await browser.newContext({
       ...iPhone,
       videosPath:'videos/',
       locale: 'de-DE',
       timezoneId: 'Europe/Berlin',
    });


  const page = await context.newPage();
  await page.goto('https://www.zomato.com/ncr');
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

})();
  