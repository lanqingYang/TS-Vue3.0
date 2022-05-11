/* 泛型 */
interface Gril {
    name: string
}
/* 2.泛型的继承 */
class SelectGril<T extends Gril> {  //泛型中必须继承name属性
    constructor(private girls: T[]) { }
    getGril(index: number): string {
        return this.girls[index].name
    }
}

const selectGril = new SelectGril([{ name: 'DODO' }, { name: 'tanghao' }])
console.log(selectGril.getGril(1))

/* 3.泛型的约束 */
class SelectGril2<T extends number | string> {  //泛型只能为string |number
    constructor(private girls: T[]) { }
    getGril(index: number): T {
        return this.girls[index]
    }
}
const selectGril2 = new SelectGril2(['大脚', 2, 3])
console.log(selectGril2.getGril(1))
