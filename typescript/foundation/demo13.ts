/* 1,getter 和 setter */
// class XiaoJieJie {
//     constructor(private _age: number) { }
//     get age() {
//         return this._age - 10
//     }
//     set age(age: number) {
//         this._age = age + 3
//     }
// }
// const dajiao = new XiaoJieJie(28)
// // console.log(dajiao._age)//私有的无法被外部访问
// dajiao.age = 25
// console.log(dajiao.age) //15


/* 2.static 修饰 */
// class Gril {
//     static sayHello() {
//         return 'hello'
//     }
// }

// const girl = new Gril()
// console.log(Gril.sayHello()) //static修饰 不用实例对象就可以调用

/* 3，只读 */
class Person {
    public readonly _name: string
    constructor(name: string) {
        this._name = name
    }
}
const person = new Person('dodo')
// person.name = 'tanghao'
console.log(person._name)