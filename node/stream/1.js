const fs = require('fs'); //文件模块  require  请求模块
//  IO 
fs
  //创建一个可读流
  .createReadStream('./sample.txt')  //打开一个可读的文件流并且返回一个fs.ReadStream对象
  .pipe(process.stdout)       //创建一个输出管道  是输出设备中的一种   交互     process是node的进程，扛把子  stdout 是输出