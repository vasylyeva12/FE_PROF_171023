// let numbers = [8, 3, 4, 5, 7];

// ForEach - перебирает массив и ничего не возращает

// numbers.forEach(el => console.log(el));

// let result = 0;
// numbers.forEach(el => result+= el);
// console.log(result)
//
//                   ------------SPLIT---------JOIN------------

// let str = "hello, world"
// str = str.split(",")
// console.log(str);

// str = str.join(" - ")
// console.log(str);

//                   ------EVERY----------SOME--------------

// numbers = numbers.every(num => num % 2 === 0); // Mетод используются для проверки массива.
// console.log(numbers);

// numbers = numbers.some(num => num % 2 === 0); // Mетод используются для проверки массива.
// console.log(numbers);

//                    --------------SORT-----------------

// let numbers = [8, 3, 4, 5, 7];
// numbers = numbers.sort((a, b) => a - b);
// console.log(numbers);

//                    -------------REDUCE-----------------

// let numbers = [8, 3, 4, 5, 7];

// let result = numbers.reduce(function(accumulator, currentValue) {
//      console.log(accumulator, currentValue);

//     return accumulator + currentValue
// }, 0)

// function reduceV2(arr, callback, initValue) {  
// let accumulator = initValue !== undefined ? initValue : arr[0];
// let startIndex = initValue !== undefined ? 0 : 1;

// for (let i = 0; i < arr.length; i++) {  
//    accumulator = callback(accumulator, arr[i])
// }
// return accumulator;
// }

// console.log(reduceV2(numbers, (accumulator, currentValue) => accumulator + currentValue, 0));


