export function sumBrackets(a) {
    let result = a;

    const inner = (b) => {
        if (b) {
            result += b;
            return inner;
        } else {
            return result;
        }
    };

    return inner;
}

export function sumBrackets2(a) {
    let result = a;

    const inner = (b) => {
        result += b;
        return inner;
    };

    inner.toString = () => {
        return result;
    };

    return inner;
}
