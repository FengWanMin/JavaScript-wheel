/**
 * 组合继承结合了原型继承和构造函数继承，将其二者的有点结合
 * 思路：
 *  1、使用原型链继承，使其可共享原型上的属性方法
 *  2、通过构造函数继承，可以实现继承实例属性
 *  这样既可以实现原型上的共用，又可以实现每个示例都有自己的属性，避免污染
*/
function Animal(name) {
  this.name = name
}

Animal.prototype.getName = function() {
  return this.name
}

function Dog(name, age) {
    this.age = age
    Animal.call(this, name)
}

Dog.prototype = new Aniaml()
Dog.prototype.constructor = Dog

var _dog = new Dog('luck', 2)
_dog.name // luck
_dog.age // 2
_dog.name = 'luck_test'
var _dog1 = new Dog('luck3', 3)
_dog1.name // luck3
_dog1.age // 3
