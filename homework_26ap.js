// //["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
// //const arr = ["Keep", "Remove", "Keep", "Remove", "Keep",]
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function removeEveryOther(arr) {
//   let res = []
//   for (let i = 0; i <= arr.length; i += 2) {
//     res.push(arr[i])
//   }
//   return res
// }
// console.log(removeEveryOther(arr))


// const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
// function countPositivesSumNegatives(input) {
//   let countPositiveNum = 0
//   let sumNegativeNum = 0
//   //let res = []
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] > 0) {
//       countPositiveNum += 1
//     }
//     if (input[i] < 0) {
//       sumNegativeNum += input[i]
//     }
//   }
//   return [countPositiveNum,sumNegativeNum ]
// }
// console.log(countPositivesSumNegatives(input))

// arr1 = [1, 2, 3, 4, 5];
// arr2 = [6, 7, 8, 9, 10];
// function mergeArrays(arr1, arr2) {
//   let dictionary = {}
//   for (let item of arr1) {
//     dictionary[item] = true
//   }
//   for (let item of arr2) {
//     dictionary[item] = true
//   }
//   return Object.keys(dictionary)
//     .map(item => parseInt(item))
//     .sort((a, b) => a - b)
// }
// console.log(mergeArrays(arr1, arr2))



// let name = "Sam Harris" 
// function abbrevName(name){
//   const arr = name.split(" ");
//  return `${arr[0][0]}.${arr[1][0]}`.toUpperCase()

// }
// console.log(abbrevName(name))

// let birds = ["African", , "Toulouse", "Pilgrim", "Steinbacher", "dsfdsfsdfsdg"]
// function gooseFilter(birds) {
//   var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//   return birds.filter((bird) => geese.indexOf(bird) === -1)
// }
// console.log(gooseFilter(birds))

