{
    let a1 = Symbol();
    let a2 = Symbol();
    console.log('symbol',a1 === a2);

    let a3 = Symbol.for('a3');
    console.log(a3);

    let a4 = Symbol.for('a3');
    console.log(a4);
    console.log(a3 === a4);
}

{
    let a1 = Symbol.for('abc');
    let obj ={
        [a1]:'123',
        'abc':345,
        'c':456
    };
    console.log('obj',obj);

    for(let [k,v] of Object.entries(obj)){
        console.log('let of',k,v);
    }

    Object.getOwnPropertySymbols(obj).forEach(function (item) {
        console.log('getOwnPropertySymbols',item,obj[item]);
    })

    Reflect.ownKeys(obj).forEach(function (item) {
        console.log('reflect',item,obj[item]);
    })
}