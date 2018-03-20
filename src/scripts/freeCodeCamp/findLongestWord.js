export default function findLongestWord(str) {
    const arr = str.split(' ');
    let maxLength = 0;

    arr.forEach(item => {
        if (item.length > maxLength) {
            maxLength = item.length;
        }
    });

    return maxLength;
}