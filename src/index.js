import './css/index.scss';

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        return resolve('success!')
    }, 500)
});

promise.then(result => console.log(result))
