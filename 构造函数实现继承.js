// 借用构造函数实现继承解决了原型链继承的 2 个问题：引用类型共享问题以及传参问题。但是由于方法必须定义在构造函数中，所以会导致每次创建子类实例都会创建一遍方法。
function Animal(name) {
  this.name = name
}

Animal.prototype.state = true

function Dog(name, age) {
  Animal.call(this, name)
  this.age = age
}
// Dog.prototype = Animal.prototype
const _dog = new Dog('luck', 2)
_dog.name // luck
_dog.age // 2
