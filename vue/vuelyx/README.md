- vuex意义？
  vuex 是vue全家桶的1/3
  在设计项目时 组件设计+数据管理

  在mvvm世界里，  数据驱动着界面，
  通过父子孙等往下传递 emit 

  数据管理中心，   数据就不会出问题

  - 传统vue- 
  先看页面 再写vuex
 focus 数据流设计

- modules 
 宏观设计一个项目
 模块 对应于vuex中的一个数据单元设计   四大家族构成
 store  单一状态树
 export default new 
 Vuex.Store({
    小型项目不要用vuex,很复杂
    就用组件传值  props + emit

    如果大型项目呢 ？ vuex modules

 })


   this.$store.products.items
   this.$store.cart.items
   namespace true


前后端分离
- 传统vue
 mounted()
  axios /api/products/:1
  this.prodducts=

- vuex
  products 数据不再 vuex里 , []
  组件 mounted()
   actions 
   axios /api/products/:1
   mutation
   products.all