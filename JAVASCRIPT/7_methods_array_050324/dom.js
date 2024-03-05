// let books = document.querySelector(".books");

// // books.style.background = 'red';
// books.style = 'background: blue';

// console.log(books);

// let items = document.querySelector(".item");
// console.log(items);

// let items = document.querySelectorAll(".item");
// console.log(items);

// let divElem = document.createElement("div");
// divElem.classList.add("box");
// divElem.innerText = "Hello World!!!";

// document.body.prepend(divElem);
// document.body.append(divElem);



// let divElem = document.createElement("div");
// divElem.classList.add("item", "item-4");
// divElem.innerText = "Book 4";

// document.querySelector(".books").append(divElem);

let books = ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5"];
function createBooks() {
    document.querySelector(".books").innerHTML = "";

    books.forEach((book, index) => {
        let divElem = document.createElement("div");
        let buttonElem = document.createElement("button");
    
        divElem.classList.add("item", `item-${index}`);
    
        buttonElem.innerText = " remove";
        divElem.innerText = book;
    
        // buttonElem.setAttribute("class", "btn") // вставляет атрибут
        // buttonElem.getAttribute("class") // получает атрибут

        buttonElem.onclick = () => removeBook(book);
    
    
        document.querySelector(".books").append(divElem);
        divElem.append(buttonElem)
    })  
}

function removeBook(bookName) {
    books = books.filter(item => item !== bookName);    
    createBooks()
}

let btn = document.querySelector(".btn");
btn.onclick = addBook;

function addBook() {
    let value = document.querySelector(".input-1").value;
    books.push(value);
    createBooks()
}
createBooks()
