const memoize = (fn) => {
    let cache = {};

    return (...args) => {
        let n = args[0];

        if (n in cache) {
            console.log('Fetching from cache', n);

            return cache[n];
        }

        let result = fn(n);
        cache[n] = result;

        return result;
    }
};

export default factorial = memoize(
    i => {
        if (i === 1) {
            return i;
        }

        return i * factorial(i - 1);
    }
);
