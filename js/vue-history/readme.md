- 链接带来了页面的互联
  一切皆资源  资源用链接表示 URL
  重新刷新是一件坏事 体验有点差

  SPA   Single Page Application 单页应用

# 路由的做法  vue-r 会用不算什么 框架的实现
- 单页应用的结构
  不再是N个页面，只是一个页面，分为不动的部分跟动的部分
  不动的部分  nav a标签  #/page1
# /page1 path 带来页面切换的  锚链接
  可以带来 URL  改变了事件，在container 元素里动态 DOM

# 锚链接用于大型页面 ， 方便跳转 锚链接让点击链接，不跳转页面成为可能  #/page1  #开头

路由接管一切 new Hashr();
constructor  封装进去了，订阅了hashChange事件

- 新的前端世界在打开 要有新的秩序
  管住所有路由 #/page hashr
  hash => cb ()  //container 显示;
  class Hashr this.rs = {} 
  向外提供 register(hash,callback = function () {}) 方法
  load 
  window.addEventListener('hashchange',this.load.bind(this))
  call , apply 都是es5里 手动指定函数内部this的API
  bind 在this上一样 ，但是它是返回一个新的函数，等下再执行  ，适合在事件执行时
  