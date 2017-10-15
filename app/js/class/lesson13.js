{
    var ajax = function (callback) {
        console.log('执行');
        setTimeout(function () {
            callback && callback.call();
        }, 1000);
    };
    ajax(function () {
        console.log('timeout1');
    })
}

{
    //promise
    let ajax=function () {
        console.log('执行promise');
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                resolve();
            },1000)
        })
    }
    ajax().then(function () {
        console.log('promise','timeout2');
    })
}

{
    let ajax=function () {
        console.log('执行3');
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                resolve();
            },1000)
        })
    }

    ajax()
        .then(function () {
        return new Promise(function (resolve,reject) {
            setTimeout(function () {
                resolve();
            },2000)
        })
    })
        .then(function () {
        console.log('promise','3');
    })
}

{
    let ajax=function (num) {
        console.log('执行4');
        return new Promise(function (resolve,reject) {
            if(num>5){
                resolve();
            }else {
                throw new Error(`出错了`);
            }
        })
    }

    ajax(6).then(function () {
        console.log('ajax',6);
    }).catch(function (err) {
        console.log('catch',err);
    })

    ajax(4).then(function () {
        console.log('ajax',6);
    }).catch(function (err) {
        console.log('catch',err);
    })
}

{
    //所有图片加载到页面
    function loadImg(src) {
        return new Promise( (resolve,reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img);
            }
            img.onerror = function () {
                reject(err);
            }
        })
    }
    
    function showImgs(imgs) {
        imgs.forEach(function (img) {
            document.body.appendChild(img);
        })
    }

    //Promise.all 所有整合，加载完毕之后才可以
    Promise.all([
        loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
        loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
        loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png')
    ]).then(showImgs);
}

{
    //一个图片加载完就可以
    function loadImg(src) {
        return new Promise( (resolve,reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function () {
                resolve(img);
            }
            img.onerror = function () {
                reject(err);
            }
        })
    }
    
    function showImgs(img) {
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }

    //Promise.race 只要有一个加载完毕就可以
    Promise.race([
        loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
        loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
        loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png')
    ]).then(showImgs);
}