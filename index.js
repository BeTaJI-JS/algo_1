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
// const str = `Алекса́ндр Серге́евич Пу́шкин (26 мая [6 июня] 1799, Москва — 29 января [10 февраля] 1837, Санкт-Петербург) — русский поэт, драматург и прозаик, заложивший основы русского реалистического направления[2], литературный критик[3] и теоретик литературы, историк[3], публицист, журналист[3]. Один из самых авторитетных литературных деятелей первой трети XIX века.`
const str = ` Ах, не говорите мне про Австрию! Я ничего не понимаю, может быть, но Австрия никогда не хотела и не хочет войны. Она предает нас. Россия одна должна быть спасительницей Европы. Наш благодетель знает свое высокое призвание и будет верен ему. Вот одно, во что я верю. Нашему доброму и чудному государю предстоит величайшая роль в мире, и он так добродетелен и хорош, что Бог не оставит его, и он исполнит свое призвание задавить гидру революции, которая теперь еще ужаснее в лице этого убийцы и злодея. Мы одни должны искупить кровь праведника. На кого нам надеяться, я вас спрашиваю?.. Англия с своим коммерческим духом не поймет и не может понять всю высоту души императора Александра. Она отказалась очистить Мальту. Она хочет видеть, ищет заднюю мысль наших действий. Что они сказали Новосильцеву? Ничего. Они не поняли, они не могли понять самоотвержения нашего императора, который ничего не хочет для себя и все хочет для блага мира. И что они обещали? Ничего. И что обещали, и того не будет! Пруссия уже объявила, что Бонапарте непобедим и что вся Европа ничего не может против него... И я не верю ни в одном слове ни Гарденбергу, ни Гаугвицу. Cette fameuse neutralité prussienne, ce n'est qu'un piège 9. Я верю в одного Бога и в высокую судьбу нашего милого императора. Он спасет Европу!.. — Она вдруг остановилась с улыбкой насмешки над своею горячностью.`

// console.log(StringArray.getLetters(str))
// console.log(StringArray.getWords(str))
// console.log(StringArray.getSentences(str))
// console.log(StringArray.removeDigits(str))
// console.log(StringArray.removePunctuation(str))
// console.log(StringArray.getDictionary(str))
// console.log(StringArray.getFrequent(str))
// console.log(StringArray.sortByFrequent(str))
const objStringArr =  new  StringArray(str)
// objStringArr.removeDigits()
// objStringArr.removePunctuation()
objStringArr.toLowerCase()
console.log(objStringArr.getDictionary())
// console.log(objStringArr.sortByFrequent())
