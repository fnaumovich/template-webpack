import './css/index.scss';

import createGroupedArray from './scripts/freeCodeCamp/createGroupedArray';
import factorial from './scripts/grokkingAlgorithms/recursion/factorial';

document.addEventListener('DOMContentLoaded', function () {
    const arr1 = ['a', 'b', 'c', 'd', 'e', 'f'];
    const arr2 = ['b', 'd', 'e', 'q', 'y', 'f'];

});

function add(x, y) {
    if (typeof y === 'undefined') {
        return function (newY) {
            return x + newY;
        }
    }

    return x + y;
}

const test = add(29);
