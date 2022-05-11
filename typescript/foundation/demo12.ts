class Person {
    // public name!: string;
    // constructor(name: string) {
    //     this.name = name
    // }

    constructor(public name: string) {
        this.name = name
    }
    /* 不写构造函数 会默认有一个
    constructor(){}
     */
}
class Teacher extends Person {
    constructor(public age: number) {
        //必须调用父类的构造函数
        super('dodo')
    }
}
const person = new Person('dodo')
const teacher = new Teacher(18)
console.log(teacher.name)