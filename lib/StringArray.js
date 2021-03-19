// getLetters
// getWords
// getSentences
// removeDigits
// removePunctuation

const getLetters = (text) => {
    return text.split("")
}

const getWords = (text) => {
    return text.split(" ")
}

const getSentences = (text) => {
    return text.split(".")
}

const removeDigits = (text) => {
    return text.replace(/[0-9]/g, " ")
        .replace(/\s\s+/g, " ")
}
const removePunctuation = (text) => {
    return text.replace(/,|\.|\-|\—|\;|\(|\)/g, " ")
        .replace(/\[|\]/g, " ")
        .replace(/\s\s+/g, " ")
}


// Функции строчных массивов. Часть 2.
// getDictionary 
// getFrequent
// sortByFrequent

const getDictionary = (text) => {
    const clearText = removeDigits(removePunctuation(text)).toLowerCase()
    const words = getWords(clearText)
    const dictionaryWords = {}
    for (let word of words) {
        if (!dictionaryWords[word]) {
            dictionaryWords[word] = 0;
        }
        dictionaryWords[word] += 1
    }
    return dictionaryWords
}

const getFrequent =(text) =>{
    const dictinaryWords = getDictionary(text)
    let maxRepeatCount = 0;
    let maxRepeatWord = null
    for(let word in dictinaryWords){
        if(dictinaryWords[word] > maxRepeatCount){
            maxRepeatWord = word
            maxRepeatCount = dictinaryWords[word];
        }
    }
    return maxRepeatWord
}

const sortByFrequent = (text) =>{
    const dictinaryWords = getDictionary(text)
    const arrWords =[]
    for(let word in dictinaryWords){
        arrWords.push({
            word, 
            count : dictinaryWords[word] 
        })
    }
    return arrWords.sort((a,b) => b.count - a.count)
}

module.exports = {
    getLetters,
    getWords,
    getSentences,
    removeDigits,
    removePunctuation,
    getDictionary,
    getFrequent,
    sortByFrequent
}