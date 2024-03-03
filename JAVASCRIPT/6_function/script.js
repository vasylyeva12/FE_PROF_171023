// // showMessage() // можем вызывать перед функцией и она отработает
// // function showMessage() {
// //     console.log("Hello World !!!");
    
// // }
// // showMessage()
// // showMessage()
// // showMessage()

// function calcSum(firstParam = 0, secondParam = 0) { // // передаем дефолтное значение после =
//     // if (!firstParam) {
//     //     firstParam = 0; // передаем дефолтное значение - один из вариантов
        
//     // }
//     // if (!secondParam) {
//     //     secondParam = 0; // передаем дефолтное значение_ оно отработает, если при вызове функции не будут переданы никакие параметры.
        
//     // }
//     console.log("Firat Param", firstParam);
//     console.log("Second Param", secondParam);  
//     let result = firstParam + secondParam  
//     console.log("Result", result);
// }
// // calcSum(); // undefined
// // calcSum(2, 5);
// calcSum()

// function showText(name) {
//     console.log(`Hello, ${name} !`);
    
// }
// showText("John");
// showText("Anna");

// function multiply(a, b) {
// // let result = a * b;
// // console.log("Result", result);
// //    return result 

// return a * b // правильнее сделать так
// }
// // multiply(5, 4);

// let x = multiply(5, 4)
// if (x) {
//     console.log("x", x);
// }

// let add = function (a, b) {
//     return a + b;
// }
// console.log(add(5, 3));

// let add = (a, b) => {
//     return a + b;
// }
// console.log(add(3, 2));

// let add = (a, b) => a + b
// console.log(add(5, 2));

// let add = x => `Hello ${x}`
// console.log(add(10));

// let getMax = (a, b) => a > b  ? a : b;
// console.log(getMax(6, 9));

// let getMax = (a, b,) => a > b  ? a : b;
// console.log(getMax(getMax(30, 9), getMax (1, 10)));

// function getNumbers(a, b, c) {
//     console.log(a, b, c);
    
// }
// getNumbers(5, 6, 7);

// function getNumbers() {
//     console.log(arguments[0], arguments[1], arguments[2]);    
// }
// getNumbers(5, 6, 7);


// function getNumbers(...arguments) { //spredoperator
//         console.log(arguments);    
//     }
//     getNumbers(5, 6, 7);

// function externalFunc() {  // замыкание - вопрос на собеседовании
//     let externalVal = "This is external function!"
//     return function internal() {
//     let internalVal = "This is internal function!"
      
//     console.log("externalVal--->", externalVal);
//     console.log("internalVal--->", internalVal);      
//     }
// }
// let internalFunc = externalFunc();
// internalFunc();

// function counter() {  // замыкание - вопрос на собеседовании
//         let value = 0
//         return function increment() {
//             return value++;
               
//         }
//     }
//     let count = counter();
//     console.log(count());
//     console.log(count());
//     console.log(count());

//  -------------------MAP-----------------

// let cars = ["BMW", "Mercedes", "Audi", "Opel"];

// let modifidedcars = cars.map(function(car, index) {
//     return car.toUpperCase();
//     // console.log(car, index);
    
    
// })
// console.log(cars, modifidedcars);

// let numbers = [1, 3, 4, 2, 7];

// ---------1 вариант-------------
// let squareNumbers = numbers.map(function (num) {
//     return num * num;    
// })

// ---------2 вариант----------------
// let squareNumbers = numbers.map(el => el**2)

// console.log(squareNumbers);

// --------3 вариант--------------------

// let getSquare = el => el**2;
// let squareNumbers = numbers.map(getSquare)
// console.log(squareNumbers);


// let numbers = [1, 3, 4, 2, 7];
// function customMap(arr, callback) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
    
//     newArr.push(callback(arr[i]));
//   }  
//   return newArr
// }

// console.log(customMap(numbers, el => el**2));

let cars = ["BMW", "Mercedes", "Audi", "Opel"];
// let carFilter = cars.filter(car => car[0] === "A");
// let carFilter = cars.filter(car => car.indexOf('e') !== -1);
let carFilter = cars.filter(car => car.toLowerCase().indexOf('a') !== -1);


console.log(carFilter);