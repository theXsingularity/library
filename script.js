//array which holds object books
let myLibrary = [];

//the constructor for creating 
function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function() {
    return `${title} by ${author}, ${pages}, ${read}`;
  }
  this.changeStatus = function() {
      console.log(this.read);
      this.read = false;
      console.log(this.read);
    }
  this.displayed = false
}

//example books
const theHobbit = new Book("The Hobbit", "J.R.R Tolkin", 295, "Read");
const dune = new Book("Dune", "Frank Herbert", 304, "Read");
const leftHand = new Book("The Left Hand of Darkness", "Urusula K. Leguin", 289, "To-Read");
const testBook = new Book("TEST BOOK", "TEST AUTHOR", 999, "To-Read");

//adding books to myLibrary
myLibrary.push(theHobbit)
myLibrary.push(dune)
myLibrary.push(leftHand)
myLibrary.push(testBook)

/* creating DOM values for the HTML elements */
const addBook = document.getElementById("addBook"); /* addBook button HTML element */

/* creating new DOM elements for displaying "books" */
let bookDiv = document.createElement('div');
let titleOutput = document.createElement('div');
let authorOutput = document.createElement('div');
let pagesOutput = document.createElement('div');
let readOutput = document.createElement('div');
let rmvBtn = document.createElement('button');

/* style DOM elements */
bookDiv.style.border = '10px solid black'
bookDiv.style.width = '200px'
bookDiv.style.margin = '20px'
bookDiv.style.background = 'dimgray';
bookDiv.style.boxShadow =  '10px 10px #888888';
bookDiv.style.padding = "15px";
rmvBtn.style.marginTop = "10px"
rmvBtn.innerText = "remove book";
rmvBtn.classList.add(`removeBook`);

/* appending elements to book display DOM element */
bookDiv.appendChild(titleOutput);
bookDiv.appendChild(authorOutput);
bookDiv.appendChild(pagesOutput);
bookDiv.appendChild(readOutput);
bookDiv.appendChild(rmvBtn);
//bookDiv.setAttribute('data-attribute', `${i}`);


/* function adding book from form to arrary
  - create a new variable 
  - run constructor function w/ arguments from form inputs
  - add the new book to myLibrary
  - clear inputs 
  - display book   */
function addBookToLibrary() {
  let newBook = new Book(book.value, author.value, pages.value, read.checked)
  console.log(read.checked)
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
    if(read.checked != true) {
      readOutput.innerText = ('Statu: to Read')
    }  else {
      readOutput.innerText = ('Status: Read')
    }
    /* need for manually entered objects */
    if (myLibrary[i].read === "To-Read") {
      readOutput.innerText = ('Status: to Read')
    } else if (myLibrary[i].read === "Read") {
       readOutput.innerText = ('Status: Read')
    }
    //append DOM elements
    bookDisplay.appendChild(bookDiv.cloneNode(true));
    bookDiv.appendChild(titleOutput);
    bookDiv.appendChild(authorOutput);
    bookDiv.appendChild(pagesOutput);
    bookDiv.appendChild(readOutput);
    bookDiv.appendChild(rmvBtn);
    //now that it has been displayed - change displayed to true
    myLibrary[i].displayed = true;
  }
  }
  let allbuttons = document.getElementsByClassName('removeBook')
  for (let i = 0; i <allbuttons.length; i++) {  //loops through node-list
    allbuttons[i].addEventListener('click', purp); //adds turnRed function (see below)
    };
}

displayBooks()



let allbook = document.getElementsByClassName('bookDOM');

function purp(event) {
  event.target.style.background = 'purple';
}

function changeBookStatus(event) {
if(this.innerText === 'Status: Read') {
  this.innerText = 'Status: To-Read'
  myLibrary[this.getAttribute('data-attribute')].read = false
} else {
  this.innerText = 'Status: Read'
  myLibrary[this.getAttribute('data-attribute')].read = true
}
}







  /* for overlay form*/
  function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }