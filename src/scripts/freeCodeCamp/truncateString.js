export default function truncateString(str, num) {
    if (str.length > num)
        return str.slice(0, num > 3 ? num-3 : num) + '...';
    return str;
};
