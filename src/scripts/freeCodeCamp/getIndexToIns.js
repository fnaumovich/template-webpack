export default function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => { return a - b });

    return arr.indexOf(num);
};
