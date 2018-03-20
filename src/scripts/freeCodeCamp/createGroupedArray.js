export default function createGroupedArray(arr, size) {
    const groups = [];

    for (let i = 0; i < arr.length; i += size) {
        groups.push(arr.slice(i, i + size));
    }

    return groups;
};
