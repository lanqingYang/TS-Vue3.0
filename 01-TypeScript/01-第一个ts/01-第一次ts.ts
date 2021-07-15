(() => {
    //str参数是string类型的
    function sayHi(str:string) {
        return 'Hello ' + str
    }
    
    let text = 'David'
    console.log(sayHi(text))
})()