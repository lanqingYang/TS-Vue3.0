(function () {
    //定义一个类，这个类的类型就是上面定义的接口
    var Person = /** @class */ (function () {
        function Person() {
        }
        //实现接口中的方法
        Person.prototype.fly = function () {
            console.log('芜湖，起飞');
        };
        return Person;
    }());
    var person = new Person();
    person.fly();
    //定义一个类，类型就是IFly和ISwim(当前这个类可以实现多个接口)
    var Person2 = /** @class */ (function () {
        function Person2() {
        }
        Person2.prototype.fly = function () { };
        Person2.prototype.swim = function () { };
        return Person2;
    }());
    var person2 = new Person2;
    person2.fly();
    person2.swim();
    var Person3 = /** @class */ (function () {
        function Person3() {
        }
        Person3.prototype.fly = function () { };
        Person3.prototype.swim = function () { };
        return Person3;
    }());
})();
