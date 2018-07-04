export default function debounce(fn, interval) {
    let timer;

    return function () {
        const functionCall = () => fn.apply(this, arguments);
        clearTimeout(timer);
        timer = setTimeout(functionCall, interval);
    }
};
