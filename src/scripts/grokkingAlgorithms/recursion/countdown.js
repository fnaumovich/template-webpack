export default function countdown(i) {
    console.log(i);

    if (i <= 0) {
        return null;
    }

    countdown(i - 1);
    return null;
};
