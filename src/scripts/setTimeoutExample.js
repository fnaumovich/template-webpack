const arr = [10, 20, 30, 40, 50];

for (var i = 0; i < arr.length; i++) {
    setTimeout(function (i) {
        // console.log(i, arr[i]);
    }, 0, i)
}

for (var i = 0; i < arr.length; i++) {
    (function (item) {
        setTimeout(function () {
            // console.log(item, arr[item]);
        }, 0)
    })(i)
}

for (var i = 0; i < arr.length; i++) {
    setTimeout(function (i) {
        // console.log(i, arr[i]);
    }.bind(this, i), 0)
}

arr.forEach((item, index) => {
    setTimeout(function () {
        // console.log(index, item);
    })
});

for (const [i, item] of arr.entries()) {
    setTimeout(function () {
        // console.log(i, item);
    })
}

for (let i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log(i, arr[i]);
    })
}
