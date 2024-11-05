function merge(arr1, arr2, order = 'asc') {
    const result = [];
    let i = 0;
    let j = 0;

    const compare = (a, b) => {
        if (order === 'asc') {
            return a < b;
        } 
        else {
            return a > b;
        }
    };

    
    if (order === 'desc') {
        arr1 = arr1.sort((a, b) => b - a);
        arr2 = arr2.sort((a, b) => b - a);
    } 
    else {
        arr1 = arr1.sort((a, b) => a - b);
        arr2 = arr2.sort((a, b) => a - b);
    }

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



console.log("Результат сортування за спаданням:", merge([1, 4, 7], [-1, 0, 2], 'asc'));

