{
    console.log(0b111110111);
    console.log(0o767);
}

{
    console.log('15',Number.isFinite(15));
    console.log('NaN',Number.isFinite(NaN));
    console.log('1/0',Number.isFinite('true'/0));
}

{
    console.log('25',Number.isInteger(25));
    console.log('25.0',Number.isInteger(25.0));
    console.log('25.1',Number.isInteger(25.1));
}

{
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.MIN_SAFE_INTEGER);
    console.log('10',Number.isSafeInteger(10));
    console.log('a',Number.isSafeInteger('a'));
}

{
    console.log('5.1',Math.trunc(5.1));
    console.log('5.9',Math.trunc(5.9));
}
{
    console.log('-5',Math.sign(-5));
    console.log('0',Math.sign(0));
    console.log('5',Math.sign(5));
    console.log('String50',Math.sign('50'));
    console.log('foo',Math.sign('foo'));
}

{
    console.log('-1',Math.cbrt(-1));
    console.log('8',Math.cbrt(8));
}