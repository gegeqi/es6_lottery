{
    console.log('a',`\u0061`);
    console.log('s',`\u20BB7`);
    console.log('s',`\u{20BB7}`);
}
{
    let s = '𠮷';
    console.log(s.length);
    console.log('0',s.charAt(0));
    console.log('1',s.charAt(1));

    console.log('0',s.charCodeAt(0));
    console.log('1',s.charCodeAt(1));

    let s1 = '𠮷a';
    console.log('s0', s1.codePointAt(0));
    console.log('s0', s1.codePointAt(0).toString(16));
}

{
    console.log(String.fromCharCode("0x20bb7"));
    console.log(String.fromCodePoint("0x20bb7"));
}

{
    let s = `\u{20BB7}abc`;
    for(let i=0;i<s.length;i++){
        console.log('es5',s[i]);
    }
    
    for(let code of s){
        console.log('es6',code);
    }
}

{
    let s = 'string';
    console.log('includes',s.includes('r'));
    console.log('start',s.startsWith('str'));
    console.log('end',s.endsWith('ng'));
}

{
    let s = 'abc';
    console.log(s.repeat(3));
}

{
    let name = 'list';
    let info = 'helloworld';
    let m = `i am ${name},${info}`;
    console.log(m);
}

{
    console.log('1'.padStart(2,'0'));
    console.log('1'.padEnd(2,'0'));
}

{
    let user = {
        name:'list',
        info:'hello world'
    }
    abc`i am ${user.name},${user.info}`
    function abc(s,v1,v2) {
        console.log(s,v1,v2);
    }
}
