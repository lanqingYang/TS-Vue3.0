//2.解决$报错
declare var $: any

const teacher: string = 'lanqing'
console.log(teacher)


// 页面加载后弹出弹框
$(function () {
    alert('lqy')
})
/*  解决上述文件报错
    1.根据提示安装
    2.头顶，直接声明$:any
    3.创建 jquery.d.ts文件 写声明文件，一般不自己写
*/
