let puppeteer = require('puppeteer')

// puppeteer的api返回的都是一个promise
;(async() => {
  // 启动一个无头浏览器
  let browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Chromium.app',
  })
})();