export default function removeAllFalseValues(arr) {
    const array = arr.filter(item => {
        return !!item;
    });

    return array;
}