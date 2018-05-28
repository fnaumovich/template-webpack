export default function memoizedAdd() {
    const cache = {};

    return (n) => {
        if (n in cache) {
            console.log('Fetching from cache');

            return cache[n];
        }

        console.log('Calculating result');
        const result = n + 10;
        cache[n] = result;

        return result;
    };
};
