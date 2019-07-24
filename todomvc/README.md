- el: #root  整个应用的根挂载结点，
- App component + vue-router + vuex 混合一起的应用

new Vue({
    el:'#app',
    render: h => (App)
})

- vue 的难点是 数据管理
 可以是一个组件的状态，data() {},
 当俩兄弟组件要共享状态时, 比如登录功能 
 props 传递过去
 应用状态？

 - 当页面上多个组件间要共享状态时，
   将共享状态，放至在这些组件的共同的父组件data来管理
   状态要唯一，放在一个地方(这个地方就是共同的父组件)  方便管理
   如果不统一，状态就有可能不同步
   父子组件通信，  v-on:incremtn="incrementCount"
   porps:   this.$emit();

 - 麻烦,找父节点有点麻烦，this。$emit()
   当有很多状态要共享的时候，  有很多的组件，  组件的关系也错综复杂，
   那就直接到APP上去 这就叫做全局数据管理  vuex 应用状态管理