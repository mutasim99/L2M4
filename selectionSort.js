
const selectionSort = arr => {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }

            if (minIndex !== i) {
                // let temp = arr[i]
                // arr[i] = arr[minIndex];
                // arr[minIndex] = temp
                [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
            }
        }
    }
    console.log(arr);
};

selectionSort([1, 3, 2, 4, 8, 5])