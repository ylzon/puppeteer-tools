let puppeteer = require('puppeteer');
let path = require('path');
let fs = require('fs');

// puppeteer的api返回的都是一个promise
;(async() => {
  // 启动一个无头浏览器
  let browser = await puppeteer.launch({
    headless: false,
    executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium',
  });
  // 新打开页面
  let page = await browser.newPage();
  // 跳转页面
  await page.goto('http://image.baidu.com/search/index?tn=baiduimage&ps=1&ct=201326592&lm=-1&cl=2&nc=1&ie=utf-8&word=%E6%9F%AF%E5%8D%97')

  let downloadPath = path.resolve(__dirname, 'download');
  let count = 0;
  let MIN_SIZE = 5 * 1024;  
  // 将页面的请求的5K以上的图片下载到download文件夹加中
  page.on('response', async (res)=>{
    let header = res.headers();
    if (header['content-type'].includes('image')) {
      if (header['content-length'] > MIN_SIZE ) {
        let buffer = await res.buffer();
        let extName = header['content-type'].split('/')[1]
        fs.writeFile(`${downloadPath}/${count++}.${extName}`, buffer, ()=>{
          console.log(`${count}.${extName}: 下载成功`)
        }) 
      }
    }
  });

  await page.evaluate(()=>{
    return new Promise((resolve, reject)=>{
      let pos = 0;
      let i = 0;
      // 模拟用户的滚动操作
      let timer = setInterval(()=>{
        window.scrollBy(0, 100);
        let scrollTop = document.documentElement.scrollTop;
        if (scrollTop === pos) {
          if (i > 100) {
            clearTimeout(timer);
            resolve();
          } else {
            i++;
          }
        } else {
          pos = scrollTop;
          i = 0;
        }
      }, 100)
    })  
  }, 100)

})();