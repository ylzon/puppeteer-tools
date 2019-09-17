let puppeteer = require('puppeteer');
let ids = [
  // id怎么获取自己研究
  // '0000000',

];

;(async ()=>{
  let browser = await puppeteer.launch({
    headless: false,
    // 不同平台地址不同，我用的是mac
    executablePath: '/Applications/Chromium.app/Contents/MacOS/Chromium',
  });
  if(ids.length === 0) {
    console.log('运行错误：当前没有要下载的内容')
    return
  }
  for(let id of ids) {
    await _downloadFile(`https://www.zybuluo.com/mdeditor#${id}`, browser);
  }
})();

async function _downloadFile(url, browser){
  try {
    const cookies = [
      // cookie格式如下，怎么获取自己研究
      // {
      // 'name': 'xx',
      // 'value': 'xxxx'
      // },
    ];

    if(cookies.length === 0) {
      console.log('运行错误：当前未设置Cookie')
      return
    }
    let page = await browser.newPage();
    await page.goto(url);
    
    await page.setCookie(...cookies);
    await page.reload();
    await page.waitFor(randomNum(8000, 10000));
    
    let settingButton = await page.waitForSelector(`.preview-button.dropdown.editor-only > .dropdown-toggle.icon-gear`);
    await settingButton.click();
    await page.waitFor(randomNum(500, 800));

    let aLink = await page.waitForSelector(`#download-markdown-submenu`);
    await aLink.click();
    await page.waitFor(randomNum(1000, 1200));
    
    console.log(`文档[${url}]：下载成功`);
    page.close();
  } catch (e) {
    console.log(`文档[${url}]：下载失败`);
  }
}

function randomNum(minNum,maxNum){ 
  switch(arguments.length){ 
      case 1: 
          return parseInt(Math.random()*minNum+1,10); 
      break; 
      case 2: 
          return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
      break; 
          default: 
              return 0; 
          break; 
  } 
} 

