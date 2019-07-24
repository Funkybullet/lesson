- 命名空间
    Phaser   {}
    1. 申明领地
    取名字很重要  var MIUI = {}
    MIUI.version = '10.1';
    MIUI.openSystem = function() { }
    游戏框架 最小化入侵我们的window
    取别的名字会污染命名空间
    2. var Phaser = {}  会直接挂载到window 下，这叫作用域  scope
    顶级就是window => 
    3. es5里面类的构造 使用function() {}
    如果函数名首字母大写，那么就认定它是一个类，一个类由构造函数，方法 Phaser.Game.prototype.getName(在原型链上添加任何的方法)
    