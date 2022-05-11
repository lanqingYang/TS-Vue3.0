interface Waiter {
    anjiao: boolean;
    say: () => {}
}
interface Teacher {
    anjiao: boolean;
    skill: () => {}
}

/* 断言方式1： as */
function judgeWho(animal: Waiter | Teacher) {
    if (animal.anjiao) {
        (animal as Teacher).skill()
    } else {
        (animal as Waiter).say()
    }
}

/* 断言方式2： 属性/方法名  in 对象*/
function judgeWho2(animal: Waiter | Teacher) {
    if ('skill' in animal) {
        animal.skill()
    } else {
        animal.say()
    }
}

/* 3. typeof */
function add(first: string | number, second: string | number) {
    // return first + second  //报错，不能用string+number
    if (typeof first === 'string' || typeof second === 'string') {
        return `${first}${second}`
    }
    return first + second
}

/* 4.instanceOf */
class NumberObj {
    count: number
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
    // return first.count + second.count  //报错  如果是object，就没有count
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count
    }
    return 0
}