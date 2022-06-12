//array which holds object books
let myLibrary = [];
//example books
const theHobbit = new Book("The Hobbit", "J.R.R Tolkin", 295, "Read");
const dune = new Book("Dune", "Frank Herbert", 304, "Read");
const leftHand = new Book("The Left Hand of Darkness", "Urusula K. Leguin", 289, "To-Read");
const testBook = new Book("TEST BOOK", "TEST AUTHOR", 999, "To-Read");
//adding books to array
myLibrary.push(theHobbit)
myLibrary.push(dune)
myLibrary.push(leftHand)
myLibrary.push(testBook)
//the constructor for creating "books"
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
      return `${title} by ${author}, ${pages}, ${read}`;
    }
    this.displayed = false
}

//creating DOM elements
const bookContainer = document.getElementById('bookList'); /* book container DOM element */
const addBook = document.getElementById("addBook"); /* button DOM element */

//function adding book from form to arrary
function addBookToLibrary() {
  //create a new variable and 
  //run constructor function w/ arguments from form inputs
  let newBook = new Book(book.value, author.value, pages.value, read.checked)
  //add the new book to myLibrary
  myLibrary.push(newBook)
  //clear inputs
  author.value= ''
  pages.value = ''
  book.value = ''
  read.checked = false
  outputToLibrary()
};
//on click... add to library and update array
addBook.addEventListener('click', function() {
  addBookToLibrary();
  
});

function outputToLibrary() {
  for (i=0; i<myLibrary.length; i++) {
    if(myLibrary[i].displayed === false) {
    //create new DOM elements
    console.log(myLibrary[i].title)
    let bookDiv = document.createElement('div');
    let titleOutput = document.createElement('div');
    let authorOutput = document.createElement('div');
    let pagesOutput = document.createElement('div')
    let readOutput = document.createElement('div')
    let rmvBtn = document.createElement('button');
    rmvBtn.innerText = "remove book";
    rmvBtn.classList.add('removeButton')

    
    //change DOM elements innerText to corresponding
    titleOutput.innerText = myLibrary[i].title
    authorOutput.innerText = myLibrary[i].author;
    pagesOutput.innerText = myLibrary[i].pages;
    if(read.checked != true) readOutput.innerText = ('Status: to Read')
    if(read.checked == true) readOutput.innerText = ('Status: Read')
    //append DOM elements
    bookContainer.appendChild(bookDiv)
    bookDiv.appendChild(titleOutput);
    bookDiv.appendChild(authorOutput);
    bookDiv.appendChild(pagesOutput);
    bookDiv.appendChild(readOutput);
    bookDiv.appendChild(rmvBtn);
      //style DOM elements
    bookDiv.style.border = '10px solid black'
    bookDiv.style.height = '100px'
    bookDiv.style.width = '200px'
    bookDiv.style.margin = '15px'
    bookDiv.style.background = 'green';
    myLibrary[i].displayed = true;
    
  }
  }
}

outputToLibrary()