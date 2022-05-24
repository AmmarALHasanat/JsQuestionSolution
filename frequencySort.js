/* 
Given an array of integers, create a 2-dimensional array 
where the first element is a distinct value from the array and 
the second element is that value's frequency within the array.  
Sort the resulting array descending by frequency.  
If multiple values have the same frequency, they should be sorted ascending.

Example

arr = [3, 3, 1, 2, 1]

There are two values, 3 and 1, each with a frequency of 2, and one value 2 with a frequency of 1: [[3, 2], [1, 2], [2, 1]] 
Sort the 2-dimensional array descending by frequency: [[3,2], [1, 2], [2, 1]]
Sort the 2-dimensional array ascending by value for values with matching frequencies: [[1,2], [3, 2], [2, 1]]
*/

let arr = [4, 1, 1, 5, 4, 2, 3, 4, 1, 2, 4, 9, 3];
function sortByFerq(arr, sortType) {
    let newArr = [];
    let count = 1;
    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            count++;
        } else {
            newArr.push([arr[i], count]);
            count = 1;
        }
    }
    if (sortType == "desc") {
        return newArr.sort(function (a, b) {
            return b[1] - a[1] || b[0] - a[0];
        });
    }
    return newArr.sort(function (a, b) {
        return b[1] - a[1];
    });
}
console.log(sortByFerq(arr, "desc"));
arr = [3, 3, 1, 2, 1];
console.log(sortByFerq(arr, "asc"));

// function frequencySort(arr) {
//     let obj = {};
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]]) {
//             obj[arr[i]]++;
//         } else {
//             obj[arr[i]] = 1;
//         }
//     }
//     for (let key in obj) {
//         result.push([key, obj[key]]);
//     }
//     result.sort((a, b) => {
//         if (a[1] === b[1]) {
//             return b[0] - a[0];
//         } else {
//             return b[1] - a[1];
//         }
//     });
//     return result;
// }
// console.log(frequencySort([3, 3, 1, 2, 1]));