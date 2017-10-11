// 正则扩展
{
    let regex = new RegExp(/abc/i);
    console.log(regex.test('abc123'));

    // es6中可以两个参数
    let regex2 = new RegExp(/abc/ig,'i');
    console.log(regex.flags);
}

{
    let s = 'bbbbb_b';
    let a1 = /b+/g;
    let a2 = /b+/y;

    console.log(a1.exec(s), a2.exec(s));

}