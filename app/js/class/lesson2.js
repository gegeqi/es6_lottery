// 结构赋值
{
    let a,b,rest ;
    [a,b=3,rest]=[1,2];
    console.log(a,b,rest);
}

{
    let a,b,rest;
    [a,b,...rest] = [1,2,3,4,5,6,7]
    console.log(a, b, rest);
}

{
    let json = {
        title:'abc',
        test:[{
            title:'test',
            desc:'description'
        }]
    }
    let {title:estitle,test:[{title:cntitle,desc:de}]} = json;
    console.log(estitle, cntitle, de);
}