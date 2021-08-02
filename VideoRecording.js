const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch({
        headless: false
    });
    const context = await browser.newContext({
        //videosPath: 'videos/',
        recordVideo: {
            dir: 'videos/',
            size: { width: 800, height: 700 }
        }
    });

     // Open new page
     const page = await context.newPage();
    await page.goto('https://www.zomato.com/ncr');
    // Click text=Log in
     await page.click('text=Log in');
    // Click [placeholder="Phone number"]
     await page.click('[placeholder="Phone number"]');
    // Fill [placeholder="Phone number"]
     await page.fill('[placeholder="Phone number"]', '123123562');
    // Click button[role="button"]:has-text("Send OTP")
   await page.close();
    await browser.close();
})();