// live-server 
// index.html  http  访问的支持  web server
const http = require('http');
const fs = require('fs');
const index = fs.createReadStream('./index.html');
// web server  一直伺服的  在某个端口下（3000）
// 向用户（request） 返回（response）资源
const server = http.createServer((req,res) => {
    // res.end('hello world');
    //index.html  显示出来     /
    // req  浏览器  访问网站的代理
    if(req.url == '/') {
        index.pipe(res);
        // res.end('index page');
    } else  if (req.url == '/userinfo'){
        const info = {
            "name": "翁良伟",
            "desc": "乱七八糟"
        }
        res.writeHead(200,{
            'Content-Type': 'text/plain;charset=utf8'
        })//给这次返回类型是什么，返回的是文本，不然会乱码 ，再发送一个utf8的信息，计算机会把乱码转化成中文
        res.end(JSON.stringify(info));  //JOSN把info变成字符串
    }else {
        res.end('hello world');
    }
})

server.listen(1314);//在这个端口上伺服