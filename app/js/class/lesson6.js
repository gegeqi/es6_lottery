{
    let arr = Array.of(3,4,7,9,11);
    console.log('arr=',arr);

    let empty = Array.of();
    console.log(empty);
}

{
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    
    console.log(p[0].innerHTML);
    pArr.forEach(function (item) {
        console.log(item);
        // console.log(item.textContent);
    })

    console.log(Array.from([1,3,5],function (item) {
        return item*2;
    }));
}

{
    console.log('fill-7',[1,'a',undefined].fill(7));
    console.log('fill-pos',['a','b','c','d','e'].fill(7,1,3));
}

{
    for(let index of ['a','b','c'].keys()){
        console.log('keys',index);
    }

    for(let value of ['a','b','c'].values()){
        //有兼容问题
        console.log('values',value);
    }

    for(let [index,value] of ['a','b','c'].entries()){
        console.log('index-values',index,value);
    }
}

{
    console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 4));
}

{
    console.log([1,2,3,4,5,6].find(function (item) {return item>3;}))
    console.log([1,2,3,4,5,6].findIndex(function (item) {return item>3;}))
}

{
    console.log('number',[1,2,NaN].includes(1));
    console.log('number',[1,2,NaN].includes(NaN));
}