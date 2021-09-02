/**
 * @desc new 关键字会做如下操作步骤： 
 * 1、创建一个新JavaScript对象，返回对象
 * 2、为步骤1新对象的添加__proto__，将该属性原型链指向构造函数的原型对象
 * 3、将步骤1创建的对象作为this上下文，也就是为构造函数绑定this
 * 4、如果构造函数返回的不是函数，则返回最新的函数（也就是this）
 * 
 * */
function mynew() {
  const obj = new Object();
  const constructor = Array.prototype.shift.call(arguments);
  obj.__proto = constructor.prototype;
  const result = constructor.apply(obj, arguments);
  
  return result instanceof Object ? result : obj;
}


