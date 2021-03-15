// getLetters
// getWords
// getSentences
// removeDigits
// removePunctuation

const getLetters = (text) =>{
    return text.split("")
}

const getWords = (text) =>{
    return text.split(" ")
}

const getSentences = (text) =>{
    return text.split(".")
}

const removeDigits = (text)=>{
    return text.replace(/[0-9]/g," ")
}
const removePunctuation = (text)=>{
    return text.replace(/,|\.|\-|\—|\;/g," ")
                .replace(/\[|\]/g," ")
}

module.exports = {
getLetters,
getWords,
getSentences,
removeDigits,
removePunctuation
}