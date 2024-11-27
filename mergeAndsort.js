function mergeAndSort(arr1, arr2, order = 'asc') {
    const result = [];
    let i = 0;
    let j = 0;

    const compare = (a, b) => {
        if (order === 'asc') {
            return a < b; 
        } else {
            return a > b; 
        }
    };

   
    while (i < arr1.length && j < arr2.length) {
        if (compare(arr1[i], arr2[j])) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    
    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    return result;
}
function customSort(arr, order = 'asc') {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if ((order === 'asc' && arr[j] > arr[j + 1]) || (order === 'desc' && arr[j] < arr[j + 1])) {
                
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

const arr1 = [1, 4, 7];
const arr2 = [-1, 0, 2];

const sortedArr1Asc = customSort(arr1, 'asc'); 
const sortedArr2Asc = customSort(arr2, 'asc');
console.log("Злиття за зростанням:", mergeAndSort(sortedArr1Asc, sortedArr2Asc, 'asc'));

const sortedArr1Desc = customSort(arr1, 'desc'); 
const sortedArr2Desc = customSort(arr2, 'desc');
console.log("Злиття за спаданням:", mergeAndSort(sortedArr1Desc, sortedArr2Desc, 'desc'));

