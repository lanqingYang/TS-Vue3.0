//接口 ： 是一种约束

(() => {
    //定义一个接口
    interface Iperson {
        firstName: string,// 姓氏
        lastName: string //名字
    }
    //输出姓名
    function showFullName(person: Iperson) {
        return person.firstName + '_' + person.lastName
    }
    const person = {
        firstName: '可',
        lastName: '莉'
    }
    console.log(showFullName(person))
})()