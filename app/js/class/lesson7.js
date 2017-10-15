{
    function test(x,y = 'world') {
        console.log('默认值',x,y);
    }

    test('hello');
    test('hello','kill');
}

{
    let x = 'test';
    function test2(x,y=x) {
        console.log('作用域',x,y);
    }

    test2();
    test2('kill');
}

{
    function test3(...arg) {
        for(let v of arg){
            console.log('rest',v);
        }
    }
    test3(1,2,3,4,'a');
}

{
    console.log(...[1,2,3]);
    console.log('a',...[1,2,3]);
}

{
    let arrow = v =>v*2;
    console.log(arrow(3));
}

{
    //尾调用(调用帧，递归的优化)
    function tail(x) {
        console.log('tail',x);
    } 
    function fx(x) {
        return tail(x);
    }
    fx(3);
}

{
    function getArguments() {
        console.log(arguments[0]);
    }
    getArguments([1,2,3,4,5]);
}