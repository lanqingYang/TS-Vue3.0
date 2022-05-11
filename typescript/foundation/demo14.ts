/* 抽象类 */
abstract class Gril {
    abstract skill()  //抽象方法
}

class Waiter extends Gril {
    skill() {
        //业务逻辑不同
        console.log('倒水')
    }
}

class BaseTeacher extends Gril {
    skill() {
        console.log('基础按摩')
    }
}

class seniorTeacher extends Gril {
    skill() {
        console.log('高级按摩')
    }
}