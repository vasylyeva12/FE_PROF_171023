// let countries = ["Malta", "Greenland", "Panama", "Armenia"]

// countries.splice(1, 1)

// let removeElem = countries.splice(1, 1)
// countries.splice(1, 1, "France")

// countries.splice(1, 2, "France", "Ukraine" )

// countries.splice(-1, 1)
//countries.splice(-1, 0, "France") //ничего не удаляю, вставляю элемент

// ---------slice-----------------

// let newCountry = countries.slice(1, 3);
// let newCountry = countries.slice(-2, -1);
// let newCountry = countries.slice(1);

// let nextCountries = ["France", "Ukraine", "USA"];
// let newCountries = countries.concat(nextCountries)
// console.log(newCountries);
// console.log(countries.indexOf("Malta", 2)); // -1
// console.log(countries.indexOf("Panama")); // 2
// console.log(countries.indexOf("France")); // -1

// console.log(countries.includes("Panama")); //true  - если находит элемент массива, false - если нет

// Вывести количество четных и не четных чисел в массиве
// let numbers = [10, 20, 35, 5, 69,  110, 52]
// let evenCount = 0;
// let oddCount = 0;

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         evenCount++;
//     }else{
//         oddCount++
//     }
    
// }
// console.log("evenCount", evenCount);
// console.log("oddCount", oddCount);


// let numbers = [10, 20, 35, 5, 69,  110, 52]
// let maxNumber = numbers[0];

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > maxNumber) {
//       maxNumber = numbers[i];
//   }
    
// }
// console.log(maxNumber);

// let str = "apple, banana, orange"; //нужно получить массив из строки
// let arr = str.split(",");
// console.log(arr);

// let str = "apple-banana-orange"; //нужно получить массив из строки
// let arr = str.split("-");

// let newArr = arr.join(" , ") // склеиваем элементы массива в одну строку, разделяя запятой  или любым указанным
// console.log(newArr);

// let str = "Hello world !!!"
// let strArr = str.split(" ");

// strArr = strArr.join(" ");
// console.log(strArr);

// let str = " I Love JavaScript ";
// // console.log(str.toUpperCase()); //  I LOVE JAVASCRIPT
// // console.log(str.toLowerCase()); //  i love javascript

// console.log(str.startsWith("I")); // false
// console.log(str.startsWith("A")); // false

// console.log(str.length); // длина строки с пробелами 19

// let newArr = str.trim() //удаляет пробелы в начале и конце
// console.log(newArr.length); //17

// let str = "I Love JavaScript";

// let newStr = str.substring(0,6); //от 0 до 6 элемента, не включительно 6
// console.log(newStr, str); // I Love I Love JavaScript

// функция changeRegister выполняет преобразование регистра символов в строке,
// которая вводится пользователем в текстовое поле split, join, toUppercase, цикл и проверка

// function changeRegister(){
//   let str = document.querySelector(".input-4").value
//    str = str.split("");  

//     for (let i = 0; i < str.length; i++) {
//         if (i % 2 === 0) {
//             str[i] = str[i].toUpperCase()
        
//         } else {
//             str[i] = str[i].toLowerCase()   
//         }      
//     }

//     str = str.join("");
//     console.log(str);
// }

// let str = "Hello, world... hello Javascript... Hello frontend!";

// str = str.replace(/hello/, "hi"); // здесь ищет до 1 совпадения
// console.log(str);

// str = str.replace(/Hello/g, "hi");  //ищет все совпадения глобально
// console.log(str);

// str = str.replace(/Hello/gi, "hi");  //ищет все совпадения глобально и с помощью i не обращает внимание на регистр
// console.log(str);

let str = "You can call this number 088203690";
str = str.replace(/[0-9]/g, "*");
console.log(str);