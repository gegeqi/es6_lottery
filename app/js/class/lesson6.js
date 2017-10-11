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
