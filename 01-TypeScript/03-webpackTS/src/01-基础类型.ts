//1.基础类型
(() => {
    //布尔类型 ----- boolean
    //let 变量名：数据类型 = 值
    let flag: boolean = true
    console.log(flag)

    // 数字类型  ----  number
    let a1: number = 10 //十进制
    let a2: number = 0b1010//二进制
    let a3: number = 0o12 //十六进制
    let a4: number = 0xa //十六进制
    console.log(a1)
    console.log(a2)
    console.log(a3)
    console.log(a4)

    //字符串 ---- string
    let s1: string = '字符串'

    console.log('====================')
    //undefined null
    let und: undefined = undefined
    let nll: null = null
    console.log(und)
    console.log(nll)
    /* undefined 和 null 都可以作为其他类型的子类  */
    // let num2:number =null
    // console.log(num2)
    console.log('====================')

    /* 2.数组定义方式3  */
    // 语法： 
    let arr1: number[] = [1, 2, 3, 4];
    console.log(arr1)
    // 泛型写法
    let arr2: Array<number> = [1, 2, 4]
    console.log(arr2)
    // 元组类型：类型和数据个数一开始就被限定，且在定义的时候数据类型及位置应该是一致的
    let arr3: [string, number, boolean] = ['字符', 11, true]
    // 运用对应类型的一些方法
    console.log(arr3[0].split(''))
    console.log(arr3[1].toFixed(2))

    console.log('=================')


    /* 3. 枚举类型 */
    //可以手动设置值 ，后面的值依次+1 ，不设置就从0开始
    enum Color {
        red,
        green,
        blue = 10
    }
    //定义一个Color的枚举类型的变量来接收枚举的值
    let color: Color = Color.red
    console.log(color)//0
    console.log(Color.red, Color.green, Color.blue)  //0,1,2
    // 通过枚举的值可以得到它的名字
    console.log(Color[1]) //green 
    //可以是中文的数据值,但是尽量不要
    enum Gender {
        女,
        男
    }
    console.log(Gender.男)  //1


    /* 4. any 类型*/
    //可以是任何数据类型
    let arr: any[] = [100, '唐昊晚上就回来啦！好耶', true]
    console.log(arr)
    //但是这种情况下不会有错误提示
    // console.log(arr[0].split(''))
    console.log('===========')

    /*  void 没有任何数据类型  */
    //在函数小括号后使用，代表返回值是该函数没有任何返回值
    function showMes(): void {
        console.log('void数据类型，在函数返回值中使用')
        // return   //undefined
        // return undefined  //undefined
        // return null      //null ,可以运行 但会有错误提示？
    }
    showMes()
    console.log(showMes())
    //定义一个void类型的而变量，可以接受一个undefined的值，但意义不大
    let vd: void = undefined
    console.log(vd)   //undefined

    console.log('===========')

    /* object类型 */
    // 参数和返回值都是object类型
    function getObj(obj: object): object {
        console.log(obj)
        return {
            name: '可莉',
            age: 4
        }
    }
    console.log(getObj({ name: '琴', age: '女' }))
    console.log(getObj(new String('123'))) //String {"123"} String 对象
    console.log(getObj(String))   //ƒ String() { [native code] }
    console.log('==============')

    /* 联合类型 + 类型断言*/
    //需求1：定义一个函数得到一个数字或字符串值的字符串形式 值
    function getString(str:number|string):string{
        return str.toString()
    }
    console.log(getString(234))  //'234'
    console.log(getString('hello')) //'hello'

    //需求2：一个函数 得到一个数组或字符串值的长度
    function getStringLength(str:number|string):number{
        if((<string>str).length){
            return (str as string).length
        }else{
            return str.toString().length
        }
    }
    console.log(getStringLength(132)) //3
})()