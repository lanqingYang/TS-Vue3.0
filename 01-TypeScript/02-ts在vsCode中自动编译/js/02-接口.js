//接口 ： 是一种约束
(function () {
    //输出姓名
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    var person = {
        // firstName: '可',
        lastName: '莉'
    };
    console.log(showFullName(person));
})();
