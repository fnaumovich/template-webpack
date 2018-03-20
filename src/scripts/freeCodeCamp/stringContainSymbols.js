export default function stringContainSymbols(arr) {
    const splitedString = arr[1].toLowerCase().split('');

    return splitedString.every(item => {
        return arr[0].toLowerCase().indexOf(item) !== -1
    });
};
