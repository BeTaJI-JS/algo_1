// Задача №1
// Напишите функцию, которая принимает на вход массив из любых элементов и возвращает сумму положительных чисел,
// находящихся в массиве. Если положительных чисел в массиве нет — верните 0.

// Примеры:
//     [null, 'never gonna give you up', 4, 0, -1, 12, -99, 3] => 19
//     ['never', -2, 'gonna', -4, 'let', 'you', 'down', NaN] => 0
//     [] => 0
//     [1, -1] => 1
const arr = [null, 'never gonna give you up', "4", 0, -1, 12, -99, 3];
const positiveNum = (arr) => {
    let sumPositiveNum = 0;
    let arrNumbers = [];
    // for(let i =0; i < arr.length; i++){
    //     if(typeof ( arr[i] === "number")){
    //         arrNumbers.push(arr[i])
    //     }
    // }

    // return arrNumbers
    for (let item of arr) {
        if (typeof (arr[item]) === "number") {
            arrNumbers.push(item)
            
        }
    }
    return arrNumbers
}




// Задача №2
// Напишите функцию, которая принимает на вход:
//     а) Массив из любых элементов
//     б) Разделитель
// Функция должна возвращать одну строку, "склеенную" из всех строк, которые есть в массиве,
// разделяя их значением второго аргумента.

// По умолчанию второй аргумент должен быть равен пустой строке ('')

// Примеры:
//     ([null, 'never', 2, 'gonna', 'give you up', 4, 0, -1, 12, -99, 3], '***') => 'never***gonna***give you up'
//     ([], '-') => '' (пустая строка)
//     (['hello', 'world', ['hello']], 'MAAAN') => 'helloMAAANworld'
//     (['want', 'to', NaN, 'sleep'], ' ') => 'want to sleep'
//     (['want', 'to', NaN, 'sleep']) => 'wanttosleep'

// const arr = (['want', 'to', NaN, 'sleep'])   // => 'wanttosleep'
// const modifinedString = (arr,)