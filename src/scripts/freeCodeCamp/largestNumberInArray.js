export default function largestNumberInArray(arr) {
    let newArr = [];

    arr.forEach(item => {
        newArr.push(Math.max(...item));
    });

    return newArr;
}