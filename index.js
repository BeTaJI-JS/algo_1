const NumberArray = require("./lib/NumberArray")

const arr =[5,3,2,1,11,77,600,11,600,5,5,12,43,24,14,1,543,221,56];
const numberArray = new NumberArray(arr)
console.log(numberArray.min())
console.log(numberArray.max())
console.log(numberArray.avg())
console.log(numberArray.filter("div",5))
console.log(numberArray.count(5))
console.log(numberArray.getDictionary())