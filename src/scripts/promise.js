function loadImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            return resolve(url);
        };
        img.onerror = () => {
            return reject(url);
        };

        img.src = url;
    })
}

/**
 * последовательная рекурсивная подгрузка и показ изображений
 *
 * @param images - массив с url
 */
function displayImage(images) {
    const imgSrc = images.shift(); // проходим по массиву изображений

    if (!imgSrc) return; //если в результате рекурсии прошлись по всему массиву

    return loadImage(imgSrc)
        .then(url => {
            $('#images').append('<img src="' + url + '" style="width: 200px;"/>');
            return displayImages(images); //рекурсия
        })
        .catch(url => {
            //если какое-то из изображений не загрузилось, переходим к следующему изображению
            console.log('не удалось загрузить изображение по указанному пути: ', url);
            return displayImages(images); //рекурсия
        });
}

/**
 * подгружаем изображения, и показываем их на странице все сразу
 *
 * @param imgList - массив url
 * @returns {Promise}
 */
function loadAndDisplayImages(imgList) {
    const notLoaded = [];
    const loaded = [];
    const promiseImg = imgList.map(loadImage);

    //вернем результат работы вызова reduce(...) - объект Promise, чтобы можно было потом  при необходимости продолжить цепочку вызовов:
    //loadAndDisplayImages(...).then(...).catch(...);
    return promiseImg.reduce((previousPromise, currentPromise) => {
        return previousPromise
            .then(() => {
                //выполняется этот участок кода, так как previousPromise - в состоянии resolved (= Promise.resolve())
                return currentPromise;
            })
            .then(url => { //для "обещаний" в состоянии resolved
                $('#images').append('<img src="'+url+'" style="width: 200px;"/>');
                loaded.push(url);

                return Promise.resolve(url);
            })
            .catch(url => { //для "обещаний" в состоянии rejected
                console.log('не удалось загрузить изображение по указанному пути: ', url);
                notLoaded.push(url);

                return Promise.resolve(url);
            })
    }, Promise.resolve())
        .then(lastUrl => {
            console.log('lastUrl:', lastUrl);
            const res = { loaded, notLoaded };
            //но мы вернем Promise, значение которого будет объект
            return Promise.resolve(res);
        });
}

loadAndDisplayImages(imgList)
    .then(function(loadRes)
    {
        console.log(loadRes);
    })
    .catch(function(err)
    {
        console.log(err);
    });
