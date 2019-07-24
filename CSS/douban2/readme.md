- html5 语义化
- 良好的html结构
- 取名
- 复用

- 路径../上一级./相对路径/绝对路径/  web server
- 前端词汇量
    page content header footer
  
- 经典结构  h5语义化标签
  heder+content+footer
- 弹性布局纵轴 + flex:1;
- 不要重复代码
- 到底以谁为设计稿  以750px作为设计尺寸  正好是375px retina
    在750px里面画了400px，怎么显示到页面中？
     可以用 200/375*414 
     一般用 200/375*100%
- max-width + margin:auto 给我们带来移动设备到ipad，PC的扩展  碎片化的终端
- 移动段水平禁用滚动条  垂直方向上要设置 oveflow-scrolling:touch 让滑动更顺滑
 -wekit 是浏览器前缀  -ms  -moz  都是
 手机端都是 wekit safari Android chrome

 - input 
    手指交互   35px差不多是手指触摸的像素大小
    border 0 
    输入不要顶格  使用 text-indent
    search 居中
    图标用背景做的 url 使用了 base64格式 no-repeat 15px （不去重复）
    background-size 