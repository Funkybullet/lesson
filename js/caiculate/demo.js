// 面向对象的世界，敢于创建对象，每一个都是的单独的策略对象
// 因为它们实现了同样的接口，这个接口叫做 caculate，所以它们可以互换使用，互换策略，这叫做策略模式
function PerformanceS() {
}
PerformanceS.prototype.caculate = function(salary) {
  return salary * 5;
}
function PerformanceA() {
}
PerformanceA.prototype.caculate = function(salary) {
  return salary * 3;
}
function PerformanceB() {
}
PerformanceB.prototype.caculate = function(salary) {
  return salary * 2;
}

// 面向对象
var Bounce = function(salary) {
  this.salary = salary
}
Bounce.prototype.setStrategy = function(strategy) {
  this.strategy = strategy;
}
Bounce.prototype.getBounce = function() {
  return this.strategy.caculate(this.salary);
}

const bounce = new Bounce(10000);
bounce.setStrategy(new PerformanceS());
console.log(bounce.getBounce());


const bounce2 = new Bounce(5000);
bounce2.setStrategy(new PerformanceA());
console.log(bounce2.getBounce());