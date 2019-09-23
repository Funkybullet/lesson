VUE REACT SPA Single Page Application 应用体验更好， 页面会白一下
传统网页开发之中  通过链接吧网站组织起来的  一个链接会重新加载一个新的页面，新的http请求 
 req /about 
 网路传输时间，01二进制，因为二进制对应着电频信号 波的速度，光速  +node/java/python 后端代码，查数据库执行的时间，吧html返回回去  =  白屏时间
 1.5s 用户就会离开  0.1s
 res /about.html

 - 网站MVC  应用 (Vue app)体验产生路由  解决了白屏问题
   VueRouter 就来了
   - hashRouter
     #/shop  #/
     优点是ie8 以上的都支持
     缺点是路由不纯粹    /shop
   - HistoryRouter  history 历史的 / shop  访问历史， 记录
     VUERouter  俩种实现方式 = HashRouter(兼容性好) + HistoryRouter (长得好，再移动端兼容性还是没有问题的)