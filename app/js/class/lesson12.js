{
    //基本定义和生成实例
    class Parent{
        constructor(name='qin'){
            this.name = name;
        }
    }

    let v_parent = new Parent('v');
    console.log('构造函数和实例',v_parent);
}

{
    class Parent{
        constructor(name='qin'){
            this.name = name;
        }
    }

    class Child extends Parent{

    }
    console.log('继承',new Child());
}

{
    // 继承传递参数
    class Parent{
        constructor(name='qin'){
            this.name = name;
        }
    }

    class Child extends Parent{
        constructor(name='child'){
            super(name);
        }
    }
    console.log('parent',new Parent());
    console.log('继承',new Child());
}

{
    //getter,setter
    class Parent{
        constructor(name='qin'){
            this.name = name;
        }

        get logName(){
            return 'qin'+this.name;
        }
        set logName(value){
            this.name = value;
        }
    }

    let v = new Parent();
    console.log('getter',v.logName);
    v.logName = 'hello';
    console.log('setter',v.logName);
}
{
    //静态方法
    class Parent{
        constructor(name='qin'){
            this.name = name;
        }
        static tell(){
            console.log('tell');
        }
    }

    Parent.tell();
}

{
    //静态属性
    class Parent{
        constructor(name='qin'){
            this.name = name;
        }
        static tell(){
            console.log('tell');
        }
    }

    Parent.type = 'parent';
    console.log('静态属性',Parent.type);
}