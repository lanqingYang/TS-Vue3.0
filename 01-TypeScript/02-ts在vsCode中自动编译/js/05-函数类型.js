/* 通过接口的方式表示函数类型
    就像是一个只有参数列表和返回值类型的函数定义。每一个参数都需要名字和类型 */
(function () {
    //函数类型：通过接口的方式作为函数的类型来使用
    var searchFunc = function (a, b) {
        return a.search(b) > 1; //查找里面是不是有字符串b
    };
    //调用函数
    console.log(searchFunc('哈哈', '啦啦啦'));
})();
