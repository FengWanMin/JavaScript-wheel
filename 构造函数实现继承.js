function Animal(name) {
  this.name = name
}

Animal.prototype.state = true

function Dog(name, age) {
  Animal.call(this, name)
  this.age = age
}
Dog.prototype = Animal.prototype
const _dog = new Dog('luck', 2)
_dog.name // luck
_dog.age // 2
