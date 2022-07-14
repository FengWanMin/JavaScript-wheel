function Animal() {
  this.age = [10,20]
}

function Dog() {}
Dog.prototype =  new Animal()
var dog = new Dog()
console.log(dog.age) //  [10,20]

dog.age.push(33)
var dog1 = new Dog()
console.log(dog.age) //  [10,20, 33]
