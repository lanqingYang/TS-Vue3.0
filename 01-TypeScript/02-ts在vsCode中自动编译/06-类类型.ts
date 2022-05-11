(() => {
    //定义一个接口 
    interface IFly {
        //该方法没有任何实现
        fly()
    }

    //定义一个类，这个类的类型就是上面定义的接口
    class Person implements IFly {
        //实现接口中的方法
        fly() {
            console.log('芜湖，起飞')
        }
    }

    const person = new Person()
    person.fly()

    //定义一个接口
    interface ISwim {
        swim()
    }

    //定义一个类，类型就是IFly和ISwim(当前这个类可以实现多个接口)
    class Person2 implements IFly, ISwim {
        fly() { }
        swim() { }
    }

    const person2 = new Person2
    person2.fly()
    person2.swim()

    //接口还可以继承其他的多个接口
    interface IMyFlyAndSwim extends IFly, ISwim { }

    class Person3 implements IMyFlyAndSwim {
        fly() { }
        swim() { }
    }

})()