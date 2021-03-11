const NumberArray = require("./lib/NumberArray")
const arr =[5,3,2,1,11,77,600,543,221,56];
console.log(NumberArray.min(arr)) //1
console.log(NumberArray.max(arr)) //600
console.log(NumberArray.avg(arr)) // 151.9

console.log(NumberArray.filter(arr,"even")) // [ 2, 600, 56 ]
console.log(NumberArray.filter(arr,"odd"))
console.log(NumberArray.filter(arr,"div",3)) // [ 3, 600, 543 ]