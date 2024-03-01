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

function multiply(a, b) {
let result = a * b;
console.log("Result", result);
   return result 
}
// multiply(5, 4);

let x = multiply(5, 4)
if (x) {
    console.log("x", x);
}
