// for (let i = 0; i <= 10; i++) {
//    console.log(i);    
// }
// let i = 0;
// for ( ; i < 10; ) {
//        console.log(i);  //9
//        i++;
//        console.log(i);  //10
//     }


// Написать цикл, которая выводит количество цифр делящиеся на 3 и 5, далее печатать конкретные цифры

// let count = 0;

// for (let i = 0; i <= 100; i++) {
// if (i % 3 === 0 && i % 5 === 0) {
//     count++;
//     console.log(i);   
// } 
   
// }

// console.log("количество цифр делящиеся на 3 и 5: " + count);

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//      console.log(i, j);         
//     }    
// }

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         document.write("*&nbsp;&nbsp;")           
//     }  
//     document.write('<br>') 
//     // *  *  *  *  *  
//     // *  *  *  *  *  
//     // *  *  *  *  *  
//     // *  *  *  *  *  
//     // *  *  *  *  *  
// }

// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5 - i; j++) {
//         document.write("*&nbsp;&nbsp;")           
//     }  
//     document.write('<br>') 
//     // *  *  *  *  *  
//     // *  *  *  *    
//     // *  *  *    
//     // *  *  
//     // *   
// }

// let i = 0;
// while (i < 5){
//     console.log(i);
//     i++
// }

// let j = 5;
// do {
//     console.log(j);
//     j++
// }while(j <  5);

// for (let i = 0; i < 99; i++) {
//     for (let j = i + 1; j < 99; j++) {
//         for (let k =  j + 1; k < 99; k++) {  
//             if(i * i + j * j === k * k){
//                 console.log(i, j , k);
//             }          
//         }        
//     }   
// }

// for (let i = 0; i < 10; i++) {
//     if (i % 2 === 0) continue;
//     console.log(i);  
    
// }

//  --------ARRAYS---------------

// let cars = ["BMW", "Mercedes", "Ford", "Renault", 'Opel'];

// console.log(cars);

// console.log(cars[2]);

// for (let i = 0; i < 4; i++) {
//     // console.log(cars[i]);
//     document.write(`<h1> ${cars[i]} </h1>`)
    
// }

// add element end PUSH
// let cars = ["BMW", "Mercedes", "Ford", "Renault", 'Opel'];
// cars.push("Audi");
// cars.push("Audi", "Volvo");
// console.log(cars);

// add elem begin UNSHIFT
// cars.unshift("Audi")
// console.log(cars);

// delet elem  POP SHIFT
// cars.pop()
// console.log(cars);

// cars.shift()

// let countries = ["Malta", "Greenland", "Panama", "Armenia"]
// let people = [441543, 45638, 56234, 2963248];

// for (let i = 0; i < countries.length; i++) {
//    document.write(`<h2>${countries[i]} - ${people[i]}</h2>`)    
// }

let countries = ["Malta", "Greenland", "Panama", "Armenia"]



