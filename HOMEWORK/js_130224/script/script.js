// 1 уровень сложности

// Функция subtract() будет выполнять вычитание двух чисел и возвращать результат.


// Получает значения из двух input-полей
// Преобразует полученные значения в числа с помощью Number() или +.
// Выполняет вычитание (-) второго числа из первого и сохраняет результат в переменную result.
// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат вычитания.
// Пример если input1 = 8, input2 = 4 то результат будет: Результат: 8 - 4 = 4


// Функция multiply() будет выполнять умножение двух чисел и возвращать результат.
// Получает значения из двух input-полей
// Преобразует полученные значения в числа с помощью Number() или +.
// Выполняет умножение (*) первого числа на второе и сохраняет результат в переменную result.
// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат умножения.
// Пример если input1 = 3, input2 = 4 то результат будет: Результат: 3 * 4 = 12


// Функция divide() будет выполнять деление двух чисел и возвращать результат.

// Получает значения из двух input-полей
// Преобразует полученные значения в числа с помощью Number() или +.
// Выполняет деление (/) первого числа на второе и сохраняет результат в переменную result.
// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат деления.
// Пример если input1 = 8, input2 = 4 то результат будет: Результат: 8 / 4 = 2


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