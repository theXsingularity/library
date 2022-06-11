//array which holds object books
let myLibrary = [];

//example books
const theHobbit = new Book("The Hobbit", "J.R.R Tolkin", 295, "Read");
const dune = new Book("Dune", "Frank Herbert", 304, "Read");
const leftHand = new Book("The Left Hand of Darkness", "Urusula K. Leguin", 289, "To-Read");

//adding books to array
myLibrary.push(theHobbit)
myLibrary.push(dune)
myLibrary.push(leftHand)


//the constructor for creating "books"
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
      return `${title} by ${author}, ${pages}, ${read}`;
    }
}

let bookContainer = document.getElementById('bookList');
bookContainer.classList.add('container')

//bookContainer.style.background = 'green'; ... same as css bookList (...obviously)

function addBookToLibrary() {
  //create a new variable and 
  //run constructor function w/ arguments from form inputs
  let newBook = new Book(book.value, author.value, pages.value, read.checked)
  
  //add the new book to myLibrary
  myLibrary.push(newBook)
 
  //create new DOM elements
  let bookDiv = document.createElement('div');
  let titleOutput = document.createElement('div');
  let authorOutput = document.createElement('div');
  let pagesOutput = document.createElement('div')
  let readOutput = document.createElement('div')

  //change DOM elements innerText to corresponding
  titleOutput.innerText = newBook.title;
  authorOutput.innerText = newBook.author;
  pagesOutput.innerText = newBook.pages;
  if(read.checked != true) readOutput.innerText = ('Status: to Read')
  if(read.checked == true) readOutput.innerText = ('Status: Read')
  
  //append DOM elements
  bookContainer.appendChild(bookDiv)
  bookDiv.appendChild(titleOutput);
  bookDiv.appendChild(authorOutput);
  bookDiv.appendChild(pagesOutput);
  bookDiv.appendChild(readOutput);
  
  //style DOM elements
  bookDiv.style.border = '10px solid black'
  bookDiv.style.height = '100px'
  bookDiv.style.margin = '15px'

  //clear inputs
  author.value= ''
  pages.value = ''
  book.value = ''
  read.checked = false

};

//button DOM element
const addBook = document.getElementById("addBook");

//event add book to library
addBook.addEventListener('click', function() {
  addBookToLibrary();
});