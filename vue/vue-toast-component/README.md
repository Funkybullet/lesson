## 弹出类 组件
1. html 结构和页面主体内容，同级，不应该嵌套在页面里面


## 面向对象
编程范式 
解决一类问题
new 出具体的问题（实例）

定义一个 vue 组件 <template> <script> <style>
实际上它是一个构造函数 
## 第一种方式调用
import Toast from '';
<Toast />

## 第二种方法 
手动的去拿到 Toast 的构造函数
vue.extend()
而且还生成了一个Toast 的实例