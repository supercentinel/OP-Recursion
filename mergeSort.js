const assert = require('assert');

function mergeSort(arr, debug) {
    let sortedArray = [];
    let l_a;
    let r_a;

    if (arr.length == 1 ) {
        return arr;
    }

    l_a = arr.slice(0, arr.length/2)
    r_a = arr.slice(arr.length/2, arr.length)

    //in case that the array length is greater than 3
    l_a = mergeSort(l_a, debug);
    r_a = mergeSort(r_a, debug);

    let i = 0;
    let j = 0;

    if (debug) {
        console.log("Merging");
        console.log(JSON.stringify(l_a) + "|" + JSON.stringify(r_a));
    }

    // merging
    while(i != r_a.length) {
        if(r_a[i] >= l_a[j]) {
            sortedArray.push(l_a[j]);
            j++;
            continue;
        }else {
            sortedArray.push(r_a[i]);
            i++;
        }
    }
    // if the left array still contains elements, push it to the sortedArray
    while(j != l_a.length) {
        sortedArray.push(l_a[j]);
        j++;
    }

    if (debug) {
        console.log(sortedArray)
    }

    return sortedArray;
}

const test_array1 = [3, 2, 1, 13, 8, 5, 0, 1];
const s_arr1 = [0, 1, 1, 2, 3, 5, 8, 13];
const test_array2 = [105, 79, 100, 110];
const s_arr2 = [79, 100, 105, 110];
const test_array3 = [38, 27, 43, 3, 9, 82, 10];
const s_arr3 = [3, 9, 10, 27, 38, 43, 82];
const test_array4 = [56, 12, 89, 34, 7, 91, 44, 67, 23, 81, 38, 5, 72, 15, 26, 48, 90, 3, 62, 13, 19, 77, 6, 88, 54, 41, 8, 79, 31, 53];
const s_arr4 = [3, 5, 6, 7, 8, 12, 13, 15, 19, 23, 26, 31, 34, 38, 41, 44, 48, 53, 54, 56, 62, 67, 72, 77, 79, 81, 88, 89, 90, 91];

try {
    assert.deepStrictEqual(mergeSort(test_array1, true), s_arr1);
    console.log('Test 1 passed!');
} catch (error) {
    console.error('failed test 1', error.message);
}

try {
    assert.deepStrictEqual(mergeSort(test_array2), s_arr2);
    console.log('Test 2 passed!');
} catch (error) {
    console.error('failed test 2', error.message);
}

try {
    assert.deepStrictEqual(mergeSort(test_array3), s_arr3);
    console.log('Test 3 passed!');
} catch (error) {
    console.err('failed test 3', error.message);
}

try {
    assert.deepStrictEqual(mergeSort(test_array4), s_arr4);
    console.log('Test 4 passed!');
} catch (error) {
    console.err('failed test 4', error.message);
}
