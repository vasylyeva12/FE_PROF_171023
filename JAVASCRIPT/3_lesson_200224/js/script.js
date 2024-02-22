// function increment() {
//     let count = 0;
//     count = count + 1
//     console.log(count); // 1
// }

// let count = 0;
// function increment() {
//     count = count + 1
//     // console.log(count); // count + 1
//     document.querySelector(".result").innerText = count;
// }

// Данная функция checking() предназначена для проверки значения переменной count
// и выполнения соответствующих действий в зависимости от того, является ли оно
// четным или нечетным. Задача функции состоит в увеличении значения count на 1
// и выводе результата на страницу, а также изменении цвета выводимого значения
// в зависимости от его четности.

// let count = 0;
// function checking() {
//     count = count + 1
//     document.querySelector(".result").innerText = count;
//     // if (count % 2 === 0) {
//     //   document.querySelector(".result").style.color = "green"
//     // } else{
//     //     document.querySelector(".result").style.color = "red"
//     // }

//     (count % 2 === 0)
//     ?  document.querySelector(".result").style.color = "green"
//     :  document.querySelector(".result").style.color = "red"

// }

// function increment(){
//     let color;

//     count = count + 1;

//     // color = count % 2 === 0 ? "green" : "red";
//     if(count % 2 === 0){
//         color = "green";
//     }else {
//         color = "red";
//     }

//     document.querySelector(".result").innerText = count;
//     document.querySelector(".result").style.color = color;
// }

// let x = 0;
// x = x + 1;
// x += 1;
// x += 2;
// x++;

// let img = document.querySelector(".gallery > img");
// let isToggle = true

// function zoom() {
//  if (isToggle) {
//     img.style.width = '350px';
//     img.style.height = '350px';

//     isToggle = false;
//  }else{
//     img.style.width = '300px'
//     img.style.height = '300px'

//     isToggle = true;
//  }
//     isToggle ? document.querySelector(".gallery").style.width = '350px' : false;
// }

// let imageCount = 1;
// let currentImage = document.querySelector(".gallery img");

// function next() {
//   imageCount++;

//   imageCount = imageCount > 5 ? 1 : imageCount;

//   console.log(imageCount);

//   currentImage.src = `./media/${imageCount}.jpg`;
// }

// function prev() {
//       imageCount--;
    
//       imageCount = imageCount < 1 ? 5 : imageCount;
    
//       console.log(imageCount);
    
//       currentImage.src = `./media/${imageCount}.jpg`;
//     }


// ------------ ЦИКЛЫ -----------------



function getSum() {
  let productValue = document.querySelector(".products").value; 
  let inputValue = document.querySelector(".count").value; 

  let result = productValue * inputValue;
   
//   console.log(productValue, inputValue);

  document.querySelector(".sum-result").innerText = `Сумма покупки: ${result}`;
}

// for (let i = 0; i < 10; i++) {
//     console.log(i);
    
// }

// for (let i = 0; i < 10; i+=2) {
//     console.log(i);
    
// }
document.write(`<div class="container products">`)
for (let i = 1; i < 6; i++) {
    document.write(`<div class="card">`)
    document.write(`<h3> Product ${i}</h3>`)
    document.write(`<img src="./media/${i}.jpg" />`)
    document.write(`</div>`)
    
}
document.write(`</div>`)