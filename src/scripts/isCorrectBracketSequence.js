function isCorrectBracketSequence(str) {
    const dictionary = {
        '[': ']',
        '{': '}',
        '(': ')',
    };

    const stack = [];

    for (let i = 0; i < str.length; i++) {
        const bracket = str[i];

        if (dictionary[bracket]) {
            stack.push(bracket)
        } else if (dictionary[stack.pop()] !== bracket) {
            return false;
        }
    }
    return true;
}
