// alert('Hello World');
// alert("");

// console.log('Check in console');

// document.write("Document write!")
// document.write("<h1>Document write!</h1>");

// Объявляем переменную

// let age;
// console.log(age);

// let age = 27;
// console.log(age);

// Можем так называть переменные
// let age;
// let user1;
// let $color;
// let _size;

// let username = "John", age = 25;
// console.log(username, age);

// let username = "John";
// let age = 25;
// console.log(username, age);
// console.log(username + age);
// console.log(username + "" + age);
// console.log(`Username ${username} Age ${age}`);
// console.log(4 * "Hello");

// console.log(5 + 3 + '2');
// console.log("8" + 1 + 1);
// console.log("8" + (1 + 1));

//       FUNCTION

let currentRate = 50000;

function change() {
    let inputValue = document.querySelector(".input-1").value;
    let res = inputValue / currentRate
    // console.log(inputValue +'$ =' + " " + res + 'BTC');

    document.querySelector(".result-1").innerText = inputValue +'$ = ' +  res + 'BTC';
    
    
}

function changeBack() {
    let inputValue = document.querySelector(".input-2").value;
    let result = inputValue * currentRate           

    document.querySelector(".result-2").innerText = inputValue + 'BTC = ' + result + '$';    
    
}

function minus() {
    let inputValue = document.querySelector(".input-3").value;
    let inputValue3 = document.querySelector(".input-4").value;

    
    let result = inputValue - inputValue3       
    

    document.querySelector(".result-3").innerText = inputValue + " - " + inputValue3 + " = " + result;    
    
}

function add() {
    let inputValue = +document.querySelector(".input-5").value; //преобразуем стороку в число
    let inputValue6 = Number(document.querySelector(".input-6").value); //преобразуем стороку в число
    
    let result = inputValue + inputValue6       
    

    document.querySelector(".result-4").innerText = inputValue + " + " + inputValue6 + " = " + result;    
    
}