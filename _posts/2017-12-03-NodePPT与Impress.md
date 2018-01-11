---
layout: post
---

# 写于之前
对于喜欢演讲分享的盆友们，这两个东西应该不陌生吧。之所以要拉出来再分享一下，是因为，最近同事机需要这样的东西来做年总报告了。为了更加清晰的介绍二者的区别和特点。下面分别分享两个demo![基于NodePPT的演示文档]()、![基于Impress的演示文档]()

# NodePPT

`作者：三水清`

### 项目依赖
---

||依赖库|介绍|Github地址|
|---|---|---|---|
|1|![chokidar](https://github.com/paulmillr/chokidar)|Nodejs文件监控|https://github.com/paulmillr/chokidar|
|2|![colors](https://github.com/mrmrs/colors)|CSS颜色库|https://github.com/mrmrs/colors|
|3|![commander](https://github.com/tj/commander.js)|Node的轻量级模块|https://github.com/tj/commander.js|
|4|![connect](https://github.com/senchalabs/connect)|HTTP server framework for node|https://github.com/senchalabs/connect|
|5|![cookie](https://github.com/jshttp/cookie)|Basic HTTP cookie parser and serializer for HTTP servers|https://github.com/jshttp/cookie|
|6|![debug](https://github.com/visionmedia/debug)|A tiny JavaScript debugging utility modelled after Node.js|https://github.com/visionmedia/debug|
|7|![ejs](https://github.com/tj/ejs)|Embedded JavaScript templates for node|https://github.com/tj/ejs|
|8|![ipv4]()|||
|9|![mathjax](https://github.com/mathjax/MathJax)|Beautiful math in all browsers|https://github.com/mathjax/MathJax|
|10|![read](https://github.com/npm/read)|For reading user input from stdin.|https://github.com/npm/read|
|11|![socket.io](https://github.com/socketio/socket.io)|a Node.js server|https://github.com/socketio/socket.io|

### 参考文档
![https://github.com/ksky521/nodeppt](https://github.com/ksky521/nodeppt)

---
```
# 获取帮助
nodeppt start -h
# 绑定端口
nodeppt start -p <port>
```
```
nodeppt start -p 8090 -d path/for/ppts
# 绑定host，默认绑定0.0.0.0
nodeppt start -p 8080 -d path/for/ppts -H 127.0.0.1
# 使用socket通信（按Q键显示/关闭二维码，手机扫描，即可控制）
# socket须知：1、注意手机和pc要可以相互访问，2、防火墙，3、ip
```