# fundation 文件加下

## demo9 接口 2

    interface Gril {
    name: string,
    age: number,
    like?: string,
    [propname: string]: any //属性名是string类型，值为任何类型都可
    say(): string //定义say方法，返回值 string

}

## demo 10 类的概念和使用

    1.继承

## demo 11 类的访问类型

    2.重写 super关键字
    3.类的访问类型 private protected piblic

## demo12 类的构造函数

    子类要写构造函数constructor，就必须调用父类super()

## demo13 类的 getter 和 setter 只读 readonly 修饰

    1.static修饰的方法和属性，不需要实例化对象就可以访问。
    2. 只在类内使用的变量和readonly等修饰符的变量名前加下划线'private readonly _name'

## demo14 抽象类

abstract class
abstract 方法名()
继承该抽象类，就要实现抽象方法

## tsconfig 文件夹 ttsconfig.json 文件作用

### demo demo2 ts 的编译配置文件

    1.根目录下 tsc -init 即可生成tsconfig.json文件
    2.写一个ts文件，控制台直接执行 tsc 就会生成一个js文件
    3.配置文件files和include区别：
        ·files包含的文件不能用exclude排除
        ·files只能包含文件，include可以包含相对、绝对文件路径列表

### demo3 noImplicitAny 解释

    允许注解类型any可以不特意标注
    ts-node 遵循tsconfig.json规则
    3.rootDirs 入口文件 outDir 编辑后js的文件（demo2）
    4.sourceMap ：ture生成.map信息文件，源代码到编译后代码的映射，在报错的时候可以看到是ts哪个地方出错了 js->ts 的映射（demo2）
    5.noUnusedLocals ：true 对没有用到的变量下划线抛出错误（demo2）
    noUnusedParams ：true  没有用的方法，抛出错误
    5.outFile 编译只生成1个文件，此时 module:'commonjs'改为 'amd'

## demo15 类型守护/联合类型守护方式

    1.类型断言
        1.1 (animal as Teacher)
        【下面都用if进行判断】
        1.2 if('skill' in animal)  属性/方法名  in 对象
        1.3  typeof
        1.4  instanceOf 一般用在类中

## demo16 枚举 \_Enum

    1.ts中存在，
    2.枚举值默认从0开始，要是想从1开始，只需给第一个值设置=1
    3.可以反查

## demo17\18 泛型

    1.<T>
    2.泛型中的继承
    3.泛型的约束 T extends number|string 泛型只能在两个中选择
    4.指定数组 T[] 或者 Array<T>

## TSWEB 文件夹 命名空间方式

    1.直接编写，编译后会产生很多全局变量，造成变量污染，使用命名空间，让变量只存在在命名空间下。 通过export 关键字 暴露变量
        namespace 空间名Home{
            变量、类等内容
            export a
        }
    通过 Home.a 在外部访问
    2.stconfig.json配置文件中outFile 编译只生成1个文件，此时 module:'commonjs'改为 'amd'
    index.html中就只需要引入1个js
    3.命名空间嵌套
        namespace father{
            namespace son{

            }
        }

## TSWEB 文件夹 import 方式

    1.export default
        在后面import的时候不需要加大括号，因为一个文件只能有一个默认导出。
    export导出：
    import { Header, Content, Footer } from './components'
    export defualt 导出：
     import 任意命名 from './components'

## parcel 文件夹 parcel 打包 ts

    1.npm install --dev parcel@next 安装parcle
    2.再index.html文件中引入ts文件
    3.package.json中script中test更改为'parcel ./src/index.html'
    4.npm test执行项目，parcel会直接执行index.html中引入的ts
    5.默认生成的文件是放在dist文件夹下

### ts 使用 jquery 库

    xxx.d.ts文件 type file文件
