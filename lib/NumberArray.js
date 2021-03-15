// Функции числовых массивов. Часть 1.

// min - минимальное число
// max - максимальное число
// avg - среднее арифметическое

// Функции числовых массивов. Часть 2.
// filter с аргументами
// even - чётные
// odd - нечётные
// div - кратные 
// count - подсчёт элемента
// getDictionary - получение словаря с количеством аргументов

class NumberArray {
    constructor(arr) {
        this.arr = arr
    }
    min() {
        let minNum = this.arr[0]
        for (let item of this.arr) {
            if (item < minNum) {
                minNum = item
            }
        }
        return minNum
    }
    max() {
        let maxNum = this.arr[0];
        for (let item of this.arr) {
            if (item > maxNum) {
                maxNum = item
            }
        }
        return maxNum
    }
    avg() {
        let sumEl = 0;
        for (let i = 0; i < this.arr.length; i++) {
            sumEl = this.arr[i] + sumEl
            //sumEl +=arr[i]
        }
        return sumEl / this.arr.length
    }
    filter(type, div) {
        let evenNum = [];
        let oddNum = [];
        let divNum = [];
        for (let item of this.arr) {
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
    count(searchEl) {
        let countSearchEl = 0;
        for (let item of this.arr) {
            if (item === searchEl) {
                countSearchEl += 1
            }
        }
        return countSearchEl
    }

    getDictionary() {
        const dictionary = {};
        for (let item of this.arr) {
            if (!dictionary[item]) {
                dictionary[item] = 0;
            }
            dictionary[item] += 1
        }
        return dictionary;
    }
}

module.exports = NumberArray



// Функции числовых массивов. Часть 2.
// filter с аргументами
// even - чётные
// odd - нечётные
// div - кратные 
// count - подсчёт элемента
// getDictionary - получение словаря с количеством аргументов

