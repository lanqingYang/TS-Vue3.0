
//高级 enum 默认从数字0开始
enum Status {
    MASSAGE = 1,
    SPA,
    DABAOJIAN
}


//中级 对象
// const Status = {
//     MASSAGE: 0,
//     SPA: 1,
//     DABAOJIAN: 2
// }

function getSever2(status: any) {
    if (status === Status.MASSAGE) {
        return 'message'
    } else if (status === Status.SPA) {
        return 'SPA'
    } else if (status === Status.DABAOJIAN) {
        return 'dabaojian'
    }
}



//初级写法
function getSever(status: number) {
    if (status === 0) {
        return 'message'
    } else if (status === 1) {
        return 'SPA'
    } else if (status === 2) {
        return 'dabaojian'
    }
}

//默认从0开始， 要是想从1开始，只需给第一个值设置=1
console.log(Status.MASSAGE) //0
console.log(Status.SPA) //1
console.log(Status.DABAOJIAN) //2
//可以反查询
console.log(Status[1]) //MASSAGE
const result1 = getSever2(1)
console.log(`去${result1}`)