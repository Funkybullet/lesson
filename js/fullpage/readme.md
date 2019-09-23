- CSS 处理
  - 某个盒子里的所有元素占据一页
  - 事件  onscroll  很多次 ，  节流
  - transform  transition 
  - 面向对象
- jquery API   $() 到底是怎么实现的？
  $(fn) 原生js也是有生命周期的(vue)，   只不过我们叫他事件
  JS是基于事件的脚本语言  找对的生命周期
  $('.coantainer')  极大的简化了  querySelector方法
  typeof  参数  function 走分支
  .find() 在一个dom里面再进行查找    queryselector
  .css(cssname,val) .heiht()

  vue 统统没有
  因为VUE 是 MVVM  它尽量的减少DOM编程，  queryselector ....都是css DOM 的查找 ，执行 ，都是要花好多内存的，vue可以优化它

  vue 生命周期   js事件
  .innerHTML  CSS width() 对应的是  
  <template>
  <div :width=“width”>
  {{content}}
  <div>
  </template>
  动态编译可以减少DOM操作，
