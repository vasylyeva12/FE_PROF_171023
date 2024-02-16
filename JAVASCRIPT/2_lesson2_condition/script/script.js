//ЛОГЧЕСКИЕ ОПЕРАТОРЫ
// let a = 10;
// let b = 20;
// let c = false;

// ЛОГИЧЕСКИЙ ОПЕРАТОР  И &&

// console.log(a && b); // 20
// console.log(c && b); // FALSE

// ЛОГИЧЕСКИЙ ОПЕРАТОР  ИЛИ //

// console.log(a && b); // 10
// console.log(c && b); //20

// ЛОГИЧЕСКИЙ ОПЕРАТОР  НЕ !

// console.log(!a); // false

// let isLoader = false;
// isLoader = !isLoader;
// isLoader = !isLoader;
// console.log(isLoader);

// if (10 > 5) {
//     // console.log(10 + " > " + 5);    
// }

// if (10 > 5) console.log(10 + " > " + 5);

// if (10 < 5) {
//     console.log("By") 

//     }  else{
//         // console.log('Hello');
//     }  


// let user = "ADMIN"

// if(user === "MANAGER"){
//     console.log("Hello MANAGER!")
// }else if(user === "ADMIN") {
//     console.log("Hello ADMIN!")
// }else {
//     console.log("Hello USER!")
// }

// Функция checkNumber используется для проверки числа, введенного пользователем в поле с классом "input-1".
// Она определяет, является ли число положительным 0 > , отрицательным < 0 или нулевым == 0, и выводит соответствующий результат
// в консоль и на страницу.



// function checkNumber() {
//     let inputValue = +document.querySelector(".input-1").value;
//     let result;

//     if ( inputValue > 0) {

//             result = (inputValue + ' > ' + 0);
            
//         } else if (inputValue < 0){
//             result =(inputValue + ' < ' + 0);
            
//         } else {
//             result =(inputValue + ' = ' + 0);
//         }   
  
    // if ( inputValue > 0) {
    //     console.log(inputValue + ' > ' + 0);
        
    // } else if (inputValue < 0){
    //     console.log(inputValue + ' < ' + 0);
        
    // } else {
    //     console.log(inputValue + ' = ' + 0);
    // }   
    
//     console.log(result);
//     document.querySelector(".result-1").innerText = result;
// }


// function getMaxTwo() {
//         let inputValue2 = +document.querySelector(".input-2").value;
//         let inputValue3 = +document.querySelector(".input-3").value;

//         let result;
    
//         if ( inputValue2 > inputValue3) {
    
//                 result = inputValue2;
                
//             } else if (inputValue2 < inputValue3){
//                 result = inputValue3;
                
//             } else {
//                 result ='They are equal';           }   

//             console.log(result);

//             function getMaxTwo(){
//                 let value1 = +document.querySelector(".input-2").value; // 5
//                 let value2 = +document.querySelector(".input-3").value; // 4
//                 let result;
            
//                 if(value1 > value2){
//                     // result = value1 + " > " + value2;
            
//                     result = `${value1} > ${value2}`;
//                 }else if(value1 < value2){
//                     // result = value1 + " < " + value2;
            
//                     result = `${value1} < ${value2}`;
//                 }else {
//                     // result = value1 + " = " + value2;
            
//                     result = `${value1} = ${value2}`;
//                 }
            
//                 document.querySelector(".result-2").innerText = result;
//             }
//         }

//         Функция getMaxThree получает значения трех чисел, введенных пользователем
// в поля с классами "input-4", "input-5" и "input-6".
// Затем она сравнивает эти числа и выводит в консоль наибольшее из них.

// function getMaxThree(){
//     let value4 = +document.querySelector(".input-4").value; 
//     let value5 = +document.querySelector(".input-5").value; 
//     let value6 = +document.querySelector(".input-6").value; 

//     let result;

//     if(value4 > value5 && value4 >value6){      

//         result = value4;

//     }else if(value5 > value6){        

//         result = value5;  
    
//     }else {  
//                 result = value6;
//     }

//     document.querySelector(".result-3").innerText = result;
// }

// function getMaxThreeV2(){
//     let value4 = +document.querySelector(".input-4").value; 
//     let value5 = +document.querySelector(".input-5").value; 
//     let value6 = +document.querySelector(".input-6").value;    

//     let result;

//     if (value4 > value5) {
//         result = value4;
        
//     } else {
//        result = value5; 
//     }
//     if(value6 > result) {
//        result = value6; 
//     }

//     document.querySelector(".result-3").innerText = result;
// }

// function getExamResult() {
//     let score = 0;
//     let num1 = +document.querySelector(".exam-1").value; 
//     let num2 = +document.querySelector(".exam-2").value; 
//     let num3 = +document.querySelector(".exam-3").value; 
//     let num4 = +document.querySelector(".exam-4").value;    
//     let num5 = +document.querySelector(".exam-5").value;  
    
//     if(num1 === 15){
//         score = score + 2; // 0 + 2
//         document.querySelector(".exam-1").style.border = "1px solid green"
//     } else{
//         document.querySelector(".exam-1").style.border = "3px solid red"

//     }

//     if(num2 === 10){
//         score = score + 2; // 2 + 2 = 4
//         document.querySelector(".exam-2").style.border = "1px solid green"
//     } else{
//         document.querySelector(".exam-2").style.border = "3px solid red"

//     }
    
//     if(num3 === 12){
//         score = score + 2; // 2 + 2 = 4
//         document.querySelector(".exam-3").style.border = "1px solid green"
//     } else{
//         document.querySelector(".exam-3").style.border = "3px solid red"
//     }
   
    
//     if(num4 === 36){
//         score = score + 2; // 2 + 2 = 4
//         document.querySelector(".exam-4").style.border = "1px solid green"
//     } else{
//         document.querySelector(".exam-4").style.border = "3px solid red"

//     }
    
//     if(num5 === 1){
//         score = score + 2; // 2 + 2 = 4
//         document.querySelector(".exam-5").style.border = "1px solid green"
//     } else{
//     document.querySelector(".exam-5").style.border = "3px solid red"
//     } 



//     document.querySelector(".result-6").innerText = `Score ${score}`;
// }

// BLOCK level
// let age = 20;

// if(true){
//     let age = 30;
//     console.log(age); //30
// }

// console.log(age); //20

// let age2 = 10;
// age2 = 20;

// let age3 = 10;
// let age3 = 20; // так нельзя делать

// const age1 = 20;

// if(true){
//     const age1 = 30;
//     console.log(age1); //30
// }

// console.log(age1); //20

// const username = "John";
// //username = "Bob" // Assignment to constant variable

// const users = "John";

//     if (true) {
//         const users = "Bob"; 
//         console.log(users);
//     }
    
    

// console.log(users);

// function getUser() {
//     const user = "Anna";
    
//     if(true){
//         const user = "Bob";

//         console.log("if", user)
//     }

//     console.log("getUser", user)
// }

// console.log(user)

// getUser()

// var age = 10;
// // var age = 20;
// // console.log(age);
// if (true) {
//     var age = 20;
//     var username = "John"
//  }

//  console.log(username, age);

function getMaxTwo() {
    let value1 = +document.querySelector(".input-2").value; // 5
    let value2 = +document.querySelector(".input-3").value; // 4

    let result = value1 > value2 
        ? value1 
        : (value2 === value1) 
            ? "=" 
            : value2;

    if(value1 > value2){
        result = value1;
    }else if(value1 < value2){
        result = value2;
    }else {
        result = "=";
    }
    document.querySelector(".result-2").innerText = result;
}

