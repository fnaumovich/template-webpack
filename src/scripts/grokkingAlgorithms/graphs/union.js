export default function union(arr1, arr2) {
    // return Array.from(new Set(arr1.concat(arr2)));

    // return Array.from(new Set([...arr1, ...arr2]));

    return arr1.filter(item => {
        return arr2.indexOf(item) === -1;
    }).concat(arr2);
};
