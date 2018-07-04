export function isArraySorted(arr) {
    return isAscending(arr) || isDescending(arr);
}

export function isDescending(arr) {
    return arr.every((item, index) => index === 0 || item <= arr[index - 1]);
}

export function isAscending(arr) {
    return arr.every((item, index) => index === 0 || item >= arr[index - 1]);
}
