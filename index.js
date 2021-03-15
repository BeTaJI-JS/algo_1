// const NumberArray = require("./lib/NumberArray")

// const arr =[5,3,2,1,11,77,600,11,600,5,5,12,43,24,14,1,543,221,56];
// const numberArray = new NumberArray(arr)
// console.log(numberArray.min())
// console.log(numberArray.max())
// console.log(numberArray.avg())
// console.log(numberArray.filter("div",5))
// console.log(numberArray.count(5))
// console.log(numberArray.getDictionary())

const StringArray = require("./lib/StringArray")
const str = `Алекса́ндр Серге́евич Пу́шкин (26 мая [6 июня] 1799, Москва — 29 января [10 февраля] 1837, Санкт-Петербург) — русский поэт, драматург и прозаик, заложивший основы русского реалистического направления[2], литературный критик[3] и теоретик литературы, историк[3], публицист, журналист[3]. Один из самых авторитетных литературных деятелей первой трети XIX века.`

console.log(StringArray.getLetters(str))
console.log(StringArray.getWords(str))
console.log(StringArray.getSentences(str))
console.log(StringArray.removeDigits(str))
console.log(StringArray.removePunctuation(str))