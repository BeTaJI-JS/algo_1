// 1
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example: ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function removeEveryOther(arr) {
//     let res = [];
//     for (let i = 0; i < arr.length; i += 2) {
//         res.push(arr[i])
//     }
//     return res
// }




//2 
//Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// If the input array is empty or null, return an empty array.
//For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// function countPositivesSumNegatives(input) {
//     let countPositiveNum = 0;
//     let sumNegativeNum = 0;
//     if (input.length == 0) {
//         return []
//     }
//     if(!input){
//         return []
//     }
//     for (let item of input) {
//         if (item > 0) {
//             countPositiveNum += 1
//         }
//         if (item < 0) {
//             sumNegativeNum += item
//         }
//     }
//     return [countPositiveNum, sumNegativeNum]
// }




//выдает ошибку


//3 





// function abbrevName(name){
//     const arr = name.split(" ")
//     return `{$arr[0][0]}+"."{$arr[1][0]}`
//     }




//Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


//
let arr1 = [1, 2, 3, 4, 5, 6];
let arr2 = [6, 7, 8, 9, 10];
function mergeArrays(arr1, arr2) {
    const arr3 = arr1.concat(arr2).sort((a, b) => a - b)
    const arr4 = [];
    for (let item of arr3) {
        if(!arr4.includes(item)){
            arr4.push(item)
        }
    }
    return arr4
}
console.log(mergeArrays(arr1, arr2))