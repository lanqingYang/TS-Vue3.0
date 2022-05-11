// //类的访问类型   private 在类内使用 protected 继承中可使用，类内 public 类内外都可用
// class Person {
//     protected name!: string //private、protected 只能在内部使用 
//     private age: 18
//     public sayHello() {
//         console.log(this.name + ' hello')
//     }
// }
// class Teacher extends Person {
//     public sayBye() {
//         this.age  //private 继承不可用
//         this.name   // protected 在继承中可以使用
//     }
// }

// const person = new Person()
// person.name = 'lqy'
// console.log(person.sayHello())