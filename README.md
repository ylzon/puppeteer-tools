# Puppeteer-tools
用puppeteer写的一堆小工具，如批量下载图片，批量导出CmdMarkdwon文件等

## 使用

* 下载代码后请安装npm包：`yarn or npm install`
* 安装Chromium: [下载地址](https://download-chromium.appspot.com/)
* 根据不同平台配置环境，我用的是vscode和Code Runner插件

## DEMO1 - 图片下载器

* 批量下载某度图片到本地
* 地址可以改别的类似无限下拉类的图片网站

## DEMO2 - CmdMarkdwon 批量下载器

* 因为买了印象笔记的会员，所以打算从cmdmarkdown上迁移过来，但是要掏99一键下载全部还是有点亏，毕竟以后不打算用了，所以自己写了个小工具
* 为了减少侵犯作者利益，ids怎么获取，cookie怎么获取我都没写，需要的自己研究
* 因为只用一次，所以没有考虑什么多线程多页面获取，速度很慢，代码也贼垃圾，而且有BUG会重复下载文件
* 所以还是请买cmdmarkdown的会员吧~

## DEMO3 - 待更新
* 后续有好玩的东西再更新
