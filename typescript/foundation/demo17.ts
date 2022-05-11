/* 泛型 */
function join<T, P>(first: T, second: P) {
    return `${first}${second}`
}

join<string, number>('11', 2)

/* 泛型中数组的使用 */
function muFun<T>(params: Array<T>) {
    return params
}
muFun<string>(['111', '222'])