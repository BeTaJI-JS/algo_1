// Функции числовых массивов. Часть 1.

// min - минимальное число
// max - максимальное число
// avg - среднее арифметическое

const min = (arr) => {
    let minNum = arr[0];
    for (let item of arr) {
        if (item < minNum) {
            minNum = item
        }
    }
    return minNum;
}

const max = (arr) => {
    let maxNum = arr[0];
    for (let item of arr) {
        if (item > maxNum) {
            maxNum = item;
        }
    }
    return maxNum;
}

const avg = (arr) => {
    let sumEl = 0;
    // for(let item of arr){       почему результат NAN?
    //     sumEl = sumEl + arr[item]
    // }
    for (let i = 0; i < arr.length; i++) {
        sumEl = sumEl + arr[i]
    }
    return sumEl / arr.length
}

// Функции числовых массивов. Часть 2.
// filter с аргументами
// even - чётные
// odd - нечётные
// div - кратные 
// count - подсчёт элемента
// getDictionary - получение словаря с количеством аргументов
const filter = (arr, type, div) => {
    let evenNum = [];
    let oddNum = [];
    let divNum = [];
    for (let item of arr) {
        if (item % 2 === 0) {
            evenNum.push(item);
        }
        if (item % 2 !== 0) {
            oddNum.push(item);
        }
        if (item % div === 0) {
            divNum.push(item);
        }
    }
    //запрос польователя вывода типа данных
    if(type === "even"){
        return evenNum;
    }
    if(type === "odd"){
        return oddNum;
    }
    if(type === "div"){
        return divNum;
    }
}

const count = (arr, el) =>{
    let countSearchEl = 0;
    for(let item of arr){
        if(el === item){
            countSearchEl +=1
        }
    }
    return countSearchEl
}

const getDictionary = (arr, item) =>{
    let countEl = {};
    for(let item of arr){
        if(!countEl[item]){
            countEl[item] =0;
        }
        countEl[item] +=1
    }
    return countEl

}


module.exports = {
    min,
    max,
    avg,
    filter,
    count,
    getDictionary
}