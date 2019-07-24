- js 运行环境
    1. 浏览器宿主 frontend 前端
    2. 服务器 backend 后端
- npm 包管理器  慢
    yarn 包管理器 facebook   快
    npm install -g live-server(包) 功能是自动刷新网页
    -g 全局安装
    yarn global add nodemon(包) 
    yarn global bin 安装的包地址在哪？

- typeof是类型运算符
  typeof duck 
  返回值是
  类型的字符串
  (数值number，字符串
  string，布尔值boolean
  null undefined)

  其他都是对象 object function []

  typeof func "function"
  函数就是一个可以运行的对象
  typeof []  "object"

- 对象字面量 { key:val ....}
typeof obj object 
  js 是动态语言 定义完后再添加 
  对象字面量 key val {} 创建对象很方便
  js 强表现力语言 UI
  - 数组
      对象  可以被遍历的对象
      因为有个.length属性
      .push()  可以在数组的末属添加一个或多个元素