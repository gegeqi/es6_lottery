{
    let obj = {
        time:'2017-10-15',
        name:'net',
        _r:123
    };

    let monitor = new Proxy(obj,{
        //拦截对象属性的读取
        get(target,key){
            return target[key].replace('2017', '2018');
        },
        //拦截对象设置属性
        set(target,key,value){
             if(key === 'name'){
                 return target[key] = value;
             }else {
                 return target[key];
             }
        },
        //拦截key in obj 操作
        has(target,key){
            if(key === 'name'){
                return target[key];
            }else {
                return false;
            }
        },
        //拦截delete
        deleteProperty(target,key){
            if(key.indexOf('_')>-1){
                delete target[key];
                return true;
            }else {
                return target[key];
            }
        },
        ownKeys(target){
            return Object.keys(target).filter(item => item != 'time');
        }
    });
    console.log('get',monitor.time);
    monitor.time = '2018';
    monitor.name = 'hello';
    // console.log('set',monitor.time,monitor.name,monitor);
    // console.log('has','name' in monitor,'time' in monitor);
    // console.log('delete',monitor.time );
    console.log('ownKeys',Object.keys(monitor));
}

{
    let obj = {
        time:'2017-10-15',
        name:'net',
        _r:123
    };
    
    console.log('reflect',Reflect.get(obj,'time'));
    Reflect.set(obj,'name','hello');
    console.log(obj);
    console.log(Reflect.has(obj,'name'));
}

{
    function validator(target,validator) {
        return new Proxy(target,{
            _validator:validator,
            set(target,key,value,proxy){
                if(target.hasOwnProperty(key)){
                    let va = this._validator[key];
                    if(!!va(value)){
                        return Reflect.set(target,key,value,proxy);
                    }else{
                        throw Error(`不能设置${key}到${value}`)
                    }
                }else{
                    throw Error(`${key}不存在`);
                }
            }
        })
    }

    const personValidatora = {
        name(val){
            return typeof val === 'string';
        },
        age(val){
            return typeof val === 'number' && val>18;
        }
    }

    class Person{
        constructor(name,age){
            this.name = name;
            this.age = age;
            return validator(this, personValidatora);
        }
    }

    const person = new Person('lilei', 30);
    console.info(person);
}