// const number = [1, 2, 3, 2, 4, 5, 1];

// //* Output → [1, 2]

// const findDup = arr =>{
//     const duplicates = [];

//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1; j< arr.length; j++){
//             if (arr[i]=== arr[j]) {
//                 if (!duplicates.includes(arr[i])) {
//                     duplicates.push(arr[i])
//                 }
//             }
//         }
//     };
//     return duplicates
// };

// console.log(findDup(number));


// const findDuplicates = arr =>{

//     const seen = new Set();
//     const duplicates = new Set();

//     for(let num of arr){
//         if (seen.has(num)) {
//             duplicates.add(num)
//         }else{
//             seen.add(num)
//         }
//     }


//     return [...duplicates]
// };

// console.log(findDuplicates(number));


const hugeArray = Array.from({ length: 100000 }, () => {
   return Math.floor(Math.random() * 1000);
});

const findDupSlow = arr => {
    const timeStart = performance.now();
    const duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                if (!duplicates.includes(arr[i])) {
                    duplicates.push(arr[i]);
                };
            };
        };
    };
    const timeEnd = performance.now();
    console.log((timeEnd - timeStart) );
    return duplicates;
};

// console.log(findDupSlow(hugeArray));

const findDupFast = arr => {
    timeStart = performance.now();

    const seen = new Set();
    const duplicates = new Set();

    for (let num of arr) {
        if (seen.has(num)) {
            duplicates.add(num)
        } else {
            seen.add(num)
        }
    }
    const timeEnd = performance.now();

    console.log((timeEnd - timeStart));
    return [...duplicates];
}

console.log(findDupFast(hugeArray));

