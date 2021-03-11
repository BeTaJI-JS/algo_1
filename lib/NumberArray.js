// Функции числовых массивов. Часть 1.

// min - минимальное число
// max - максимальное число
// avg - среднее арифметическое

const min = (arr) => {
    let minNum = arr[0]
    for (let item of arr) {
        if (item < minNum) {
            minNum = item
        }
    }
    return minNum
}

const max = (arr) => {
    let maxNum = arr[0];
    for (let item of arr) {
        if (item > maxNum) {
            maxNum = item
        }
    }
    return maxNum
}

const avg = (arr) => {
    let sumEl = 0;
    for (let i = 0; i < arr.length; i++) {
        sumEl = arr[i] + sumEl
        //sumEl +=arr[i]
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

const filter1 = (arr, type, div) => {
    // const settings = {
    //     'even': [2, 0],
    //     'odd': [2, 1],
    //     'div': [div, 0]
    // }
    // return arr.filter(item => (item % settings[type][0] === settings[type][1]))

    let divider = 1;
    let rest = 0;
    if (type === 'even') {
        divider = 2;
    } else if (type === 'odd') {
        divider = 2;
        rest = 1;
    } else if (type == 'div') {
        divider = div;
    }
    return arr.filter(item => (item % divider === rest))
}

const filter = (arr, type, div) => {
    let evenNum = [];
    let oddNum = [];
    let divNum = [];
    for (let item of arr) {
        if (item % 2 === 0) {
            evenNum.push(item)
        }
        if (item % 2 !== 0) {
            oddNum.push(item)
        }
        if (item % div === 0) {
            divNum.push(item)
        }
    }
    if (type === "even") {
        return evenNum
    }
    if (type === "odd") {
        return oddNum
    }

    if (type === "div") {
        return divNum
    }
}

module.exports = {
    min,
    max,
    avg,
    filter
}