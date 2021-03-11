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

const max = (arr) =>{
    let maxNum = arr[0];
    for(let item of arr){
        if(item > maxNum){
            maxNum = item
        }
    }
    return maxNum
}

const avg = (arr) =>{
    let sumEl =0;
    for(let i=0; i < arr.length; i++){
        sumEl = arr[i] +sumEl
        //sumEl +=arr[i]
    }
    return sumEl/arr.length
}

module.exports = {
    min,
    max,
    avg
}