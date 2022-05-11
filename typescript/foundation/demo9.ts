// interface Gril {
//     name: string,
//     age: number,
//     like?: string,
//     [propname: string]: any //属性名是string类型，值为任何类型都可
//     say(): string //定义say方法，返回值 string
// }

// const gril = {
//     name: 'dodo',
//     age: 18,
//     animal: 'dog',
//     say() {
//         return '汪汪'
//     },
//     teach() {
//         return '画画'
//     }
// }

// interface Teacher extends Gril {
//     teach(): string
// }

// /* 类 受到接口约束 */
// class Xiaojiejie implements Gril {
//     name: '小红';
//     age: 18;
//     say() {
//         return 'hello'
//     }

// }

// const screenResume = (gril: Teacher) => {
//     gril.animal && console.log(gril)
// }

// screenResume(gril)