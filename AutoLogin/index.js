let puppeteer = require('puppeteer')
let username = '3035465284@qq.com';
let password = 'abc123456';

;(async ()=>{
  let browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium',
  });

  let  page = await browser.newPage();
  await page.goto('https://accounts.douban.com/login')

  await page.type('#email', username, {delay: 30});
  await page.waitFor(500);
  await page.type('#password', password, {delay: 20});
  
  await page.screenshot({path: 'ok.png'});
})();
