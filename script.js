//array which holds object books
let myLibrary = [];

//the constructor for creating "books"
class Book {
  constructor(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.displayed = false
  }
  info() {
    return `${this.title} by ${this.author}, ${this.pages}, ${this.read}`;
    }
  changeStatus()  {
      this.read = false;
    }
  }

//example books and adding to myLibrary
const theHobbit = new Book("The Hobbit", "J.R.R Tolkin", 295, false);
const dune = new Book("Dune", "Frank Herbert", 304, true);
const leftHand = new Book("The Left Hand of Darkness", "Urusula K. Leguin", 289, false);
const testBook = new Book("TEST BOOK", "TEST AUTHOR", 999, true);
myLibrary.push(theHobbit)
myLibrary.push(dune)
myLibrary.push(leftHand)
myLibrary.push(testBook)

/* creating DOM values for HTML elements */
const addBook = document.getElementById("addBook"); /* addBook button HTML element */

/* creating new DOM elements for displaying "books" */
let bookDiv = document.createElement('div');
bookDiv.classList.add('bookDiv')
let titleOutput = document.createElement('div');
let authorOutput = document.createElement('div');
let pagesOutput = document.createElement('div');
let readOutput = document.createElement('div');
readOutput.setAttribute('id', 'bstatus');
let rmvBtn = document.createElement('button');
let changeStatus = document.createElement('button')

/* style DOM elements */
rmvBtn.style.marginTop = "10px"
rmvBtn.innerText = "remove book";
rmvBtn.classList.add(`removeBook`);
changeStatus.classList.add('changeStatus')
changeStatus.innerText = "changeStatus"
/* appending elements to book display DOM element */
bookDiv.appendChild(titleOutput);
bookDiv.appendChild(authorOutput);
bookDiv.appendChild(pagesOutput);
bookDiv.appendChild(readOutput);
bookDiv.appendChild(changeStatus);
bookDiv.appendChild(rmvBtn);

let rmvBtns = document.getElementsByClassName('removeBook');
let changeBtn = document.getElementsByClassName('changeStatus');

/* function adding book from form to arrary
  - create a new variable 
  - run constructor function w/ arguments from form inputs
  - add the new book to myLibrary
  - clear inputs 
  - display book   */
function addBookToLibrary() {
  let newBook = new Book(book.value, author.value, pages.value, read.checked)
  myLibrary.push(newBook)
  author.value= ''
  pages.value = ''
  book.value = ''
  read.checked = false
  displayBooks()
  off()
};

//adds previous function to the button addBook button on form
addBook.addEventListener('click', function() {
  addBookToLibrary();
  
});

// displays array object by creating new DOM elements
function displayBooks() {
  for (i=0; i<myLibrary.length; i++) {
    //if not displayed ... display 
    if(myLibrary[i].displayed === false) {
    readOutput.setAttribute('data-attribute', `${i}`);
    titleOutput.innerText = `Title: ${myLibrary[i].title}`
    authorOutput.innerText = `Author: ${myLibrary[i].author}`;
    pagesOutput.innerText = `Length: ${myLibrary[i].pages} pages`;
    if (myLibrary[i].read === false) {
      readOutput.innerText = ('Status: to Read')
    } else if (myLibrary[i].read === true) {
       readOutput.innerText = ('Status: Read')
    }
    //append DOM elements
    bookDisplay.appendChild(bookDiv.cloneNode(true));
    bookDiv.appendChild(titleOutput);
    bookDiv.appendChild(authorOutput);
    bookDiv.appendChild(pagesOutput);
    bookDiv.appendChild(readOutput);
    bookDiv.appendChild(changeStatus);
    bookDiv.appendChild(rmvBtn);
    //now that it has been displayed - change displayed to true
    myLibrary[i].displayed = true;
  } 
  }
  //loops through remove buttons array and adds event listener and attribute
  for (let i = 0; i <rmvBtns.length; i++) {  //loops through node-list
    rmvBtns[i].addEventListener('click', rmv);
    rmvBtns[i].setAttribute('data-attribute', `${i}`);
  };
  for (let i = 0; i <changeBtn.length; i++) {  //loops through node-list
    changeBtn[i].addEventListener('click', changeBook);
    changeBtn[i].setAttribute('data-attribute', `${i}`);
  };
}
displayBooks()

function rmv(event) {
  event.target.style.background = 'purple';
  myLibrary.splice(this.getAttribute('data-attribute'), 1)
  this.parentNode.remove()
  //must re-assign data attributes so corresponds to array value
  for (let i = 0; i <rmvBtns.length; i++) {  //loops through node-list
    rmvBtns[i].addEventListener('click', rmv);
    rmvBtns[i].setAttribute('data-attribute', `${i}`);
    };
}

function changeBook(event) {
  if(myLibrary[this.getAttribute('data-attribute')].read === true) {
    myLibrary[this.getAttribute('data-attribute')].read = false
    this.previousElementSibling.innerText = 'Status: to Read'
  } else {
    myLibrary[this.getAttribute('data-attribute')].read = true
    this.previousElementSibling.innerText = 'Status: Read'
  }
  for (let i = 0; i <changeBtn.length; i++) {  //loops through node-list
    changeBtn[i].addEventListener('click', changeBook);
    changeBtn[i].setAttribute('data-attribute', `${i}`);
  };
}
  /* for overlay form*/
function on() {
  document.getElementById("overlay").style.display = "block";
}
function off() {
  document.getElementById("overlay").style.display = "none";
}

