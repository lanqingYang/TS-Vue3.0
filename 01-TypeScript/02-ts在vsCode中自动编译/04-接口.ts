(() => {
    //定义一个接口作为person对象的类型使用
    interface Iperson {
        readonly id: number,
        name: string,
        age: number,
        sex?: string
    }

    const person: Iperson = {
        id: 1,
        name: 'Sydney',
        age: 12
    }
    console.log(1)
    console.dir(person)
})()