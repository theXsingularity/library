let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
    this.info = function() {
      return `${title} by ${author}, ${pages}, ${status}`;
    }
}

function addBookToLibrary() {

  //from form
  let ti = document.querySelector('#book')
  let au = document.querySelector('#author')
  let pa = document.querySelector('#pages')

  //boox div container and contents
  let bookContainer = document.createElement('div');
  let titleOutput = document.createElement('div');
  let authorOutput = document.createElement('div');
  let pagesOutput = document.createElement('div')
  bookList.appendChild(bookContainer);
  book.appendChild(titleOutput)
  book.appendChild(authorOutput)
  book.appendChild(pagesOutput)


  titleOutput.textContent = ti;
  authorOutput.textContent = au;
  pagesOutput.textContent = pa;
}

const addBook = document.getElementById("addBook");

addBook.addEventListener('click', function() {
  addBookToLibrary();
  
})







const name = document.querySelector("#username")
const greetMeButton = document.querySelector(".greet-btn")
const greetingOutput = document.querySelector(".greeting")

greetMeButton.addEventListener('click', (event) => {
  greetingOutput.innerText = `Hello ${name.value}`;
   name.value=''
})

const theHobbit = new Book("The Hobbit", "J.R.R Tolkin", 295, "Read");
const dune = new Book("Dune", "Frank Herbert", 304, "Read");
const leftHand = new Book("The Left Hand of Darkness", "Urusula K. Leguin", 289, "To-Read");






myLibrary.push(theHobbit)
myLibrary.push(dune)
myLibrary.push(leftHand)





const book = document.createElement('div');
const title = document.createElement('div');
const author = document.createElement('div');
const pages = document.createElement('div')
title.textContent = theHobbit.title;
author.textContent = theHobbit.author;
pages.textContent = theHobbit.pages;
bookList.appendChild(book);
book.appendChild(title)
book.appendChild(author)
book.appendChild(pages)


/*
const book2 = document.createElement('div');
book2.textContent = "THIS is also a book";
book2.style.border = "25px solid gray";
bookList.appendChild(book2); 

const book3 = document.createElement('div');
book3.textContent = "THIS is also a book";
book3.style.border = "25px solid orange";
bookList.appendChild(book3);

const book4 = document.createElement('div');
book4.textContent = "THIS is also a book";
book4.style.border = "25px solid blue";
bookList.appendChild(book4); 

const book5 = document.createElement('div');
book5.textContent = "THIS is also a book";
book5.style.border = "25px solid red";
bookList.appendChild(book5);


const name = document.querySelector("#username")
const greetMeButton = document.querySelector(".greet-btn")
const greetingOutput = document.querySelector(".greeting")

greetMeButton.addEventListener('click', (event) => {
  Book(title.innerText, author.innerText, pages.innerText); 
  greetingOutput.innerText = `Hello ${name.value}`;
   name.value=''
})

*/