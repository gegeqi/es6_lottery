{
    let list = new Set();
    list.add(5);
    list.add(7);
    console.log('size',list.size);
}

{
    let arr = [1,2,3,4,5];
    let list = new Set(arr);
    console.log('size',list.size);
}

{
    let list = new Set();
    list.add(1);
    list.add(2);
    list.add(1);
    console.log('list',list);

    let arr = [1,2,3,2,1];
    let list2 = new Set(arr);
    console.log('unique',list2);
    
    console.log(Array.from(list2));
}

{
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);
    
    console.log('has',list.has('add'));
    console.log('delete',list.delete('add'),list);
    list.clear();
    console.log('clear',list);
}

{
    let arr = ['add', 'delete', 'clear', 'has'];
    let list = new Set(arr);

    for(let k of list.keys()){
        console.log('key',k);
    }

    for(let k of list.values()){
        console.log('values',k);
    }

    for(let [k,v] of list.entries()){
        console.log('entries',k,v);
    }
    list.forEach(function (item) {
        console.log('foreach',item);
    })
}


{
    let weakList = new WeakSet();
    let arg = {};
    weakList.add(arg);
    console.log('weakList',weakList);
}

{
    let map = new Map();
    let arr = ['123'];

    map.set(arr, 456);
    console.log('map',map,map.get(arr));
}

{
    let map = new Map([['a', 123], ['b', 456]]);
    console.log('map args',map);
    console.log('size',map.size);
    console.log('delete',map.delete('a'),map);
    console.log('clear',map.clear(),map);
}

{
    let weakMap = new WeakMap();
    let o = {};
    weakMap.set(o,123);
    console.log(weakMap,weakMap.get(o));

    let arr = [1,2,3,4,5,1]
    let arr2 = [];
    console.log(arr2);
    arr.forEach(item=>item==1?arr2.push(8):arr2.push(item));
    console.log(arr2);

}

{
    // 数据结构横向对比，增删改查
    let map = new Map();
    let array = [];
    //增
    map.set('t',1);
    array.push({t:1});
    console.log('map-array',map,array);

    //查
    let map_exist = map.has('t');
    let array_exist = array.find(item=>item.t);
    console.log('map-array',map_exist,array_exist);

    //改
    map.set('t',2);
    array.forEach(item => item.t ? item.t = 2 : '');
    console.log('map-array-modify',map,array);

    //删
    map.delete('t');
    let index = array.findIndex(item=>item.t);
    array.splice(index, 1);
    console.log('map-array-empty',map,array);
}

{
    let set = new Set();
    let array = [];

    //增
    set.add({t:1});
    array.push({t: 1});
    console.info('set-array', set, array);

    //查
    let set_exist = set.has({t:1});
    let array_exist = array.find(item=>item.t);
    console.log('set-array',set,array);

    //改
    set.forEach(item => item.t ? item.t = 2 : '');
    array.forEach(item => item.t ? item.t = 2 : '');
    console.log('set-array',set,array);

    //删
    set.forEach(item => item.t ? set.delete(item) : '');
    let index = array.findIndex(item=>item.t);
    array.splice(index, 1);
    console.log('set-array-empty',set,array);
}


{
    //map,set,object对比
    let item = {t: 1};
    let map = new Map();
    let set = new Set();
    let obj = {};

    //增
    map.set('t', 1);
    set.add(item);
    obj['t'] = 1;
    console.log('map-set-obj',map,set,obj);

    //查
    console.info({
        map_exist: map.has('t'),
        set_exist: set.has(item),
        obj_exist: 't' in obj
    });

    //改
    map.set('t', 2);
    item.t = 2;
    obj['t'] = 2;
    console.log('map-set-obj-modify',map,set,obj);

    //删
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.log('map-set-obj-empty',map,set,obj);

    //

}