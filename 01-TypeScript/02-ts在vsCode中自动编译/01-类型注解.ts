//类型注解
(() => {
    function sayHi(str: string) {
         return 'hello ' + str
    }
    let text = 'Sydney'
    console.log(sayHi(text))
    let mes = [1, 2]
//     console.log(sayHi(mes))
 })()