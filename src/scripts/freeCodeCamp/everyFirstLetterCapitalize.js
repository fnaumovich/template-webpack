export default function everyFirstLetterCapitalize(str) {
    if (typeof str === 'string' && str.length) {
        const arr = str.toLowerCase().split(' ');
        const arrCapitalized = [];

        for (let i = 0; i < arr.length; i++) {
            arrCapitalized.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
        }

        return arrCapitalized.join(' ');
    }

    return '';
}

function everyFirstLetterCapitalize2(str) {
    if (typeof str === 'string' && str.length) {
        const arr = str.toLowerCase().split(' ');
        const arrCapitalize = arr.map(item => {
            return item.replace(item.charAt(0), item.char(0).toUpperCase());
        })
    }

    return '';
}