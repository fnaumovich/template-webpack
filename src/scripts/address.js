export default function address(str) {
    const reg = /\:/g;
    const arr = str.split(reg);
    const maxArrLength = 8;

    let buffArr = arr.map((item, index) => {
        if (item.length === 0) {
            item = 'zzzz';
        }

        if (item.length < 4) {
            while (item.length < 4) {
                item = '0' + item;
            }
        }

        return item;
    });

    const buffArrLength = buffArr.length;
    const additionalItemsCount = maxArrLength - buffArrLength;
    const elementIndex = buffArr.indexOf('zzzz');

    buffArr[elementIndex] = '0000';

    for (let i = 0; i < additionalItemsCount; i++) {
        buffArr.splice(elementIndex, 0, '0000');
    }

    buffArr = buffArr.map(item => {
        if (item === 'zzzz') {
            item = '0000';
        }

        return item;
    });

    return buffArr.join(':');
};
