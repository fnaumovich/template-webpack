export default function memoizedAdd() {
    let cache = {};

    return (n) => {
        if (n in cache) {
            console.log('Fetching from cache');

            return cache[n];
        }

        console.log('Calculating result');
        let result = n + 10;
        cache[n] = result;

        return result;
    }
};
