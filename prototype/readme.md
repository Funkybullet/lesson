<!-- es5 面向对象 -->
- prototype 的三角恋
   构造函数(constructor)  构造函数的原型对象 {}  实例
   Person.prototype = {}
   Person.prototype.getName
   es6  class 只是语法糖
   Person 构造函数 任何一个函数都会有prototype属性   指向一个原型对象
   实例会通过prototype属性拿到所有的方法
   person.getName();

   Person.prototype.constructor = Person()
   Person 1 => n person

   person   Person.prototype
   实例如何拿到原型链上的方法呢？
person.__protto__ === 