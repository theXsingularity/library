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

//creating values for the HTML elements
let bookContainer = document.getElementById('bookList'); /* book container HTML element */
const addBook = document.getElementById("addBook"); /* addBook button HTML element */

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
  /* runs function below
  checks to see if all objectes have been displayed
  then adds the new object */
  outputToLibrary()
  off()
};

//adds ^^ that function to the button addBook
addBook.addEventListener('click', function() {
  addBookToLibrary();
});

// displays array object by creating new DOM elements
function outputToLibrary() {
  for (i=0; i<myLibrary.length; i++) {
    if(myLibrary[i].displayed === false) {
    
      /* create new DOM elements */
      //book output container
    let bookDiv = document.createElement('div');
      bookDiv.classList.add('bookDOM');
      bookDiv.setAttribute('data-attribute', `${i}`);
      //book info DOM elements
    let titleOutput = document.createElement('div');
    let authorOutput = document.createElement('div');
    let pagesOutput = document.createElement('div')
    let readOutput = document.createElement('div')
    
    /* style DOM elements */
    bookDiv.style.border = '10px solid black'
    bookDiv.style.width = '200px'
    bookDiv.style.margin = '20px'
    bookDiv.style.background = 'dimgray';
    bookDiv.style.boxShadow =  '10px 10px #888888';
    bookDiv.style.padding = "15px";
    myLibrary[i].displayed = true;
    
    //change DOM elements innerText to corresponding
    titleOutput.innerText = `Title: ${myLibrary[i].title}`
    authorOutput.innerText = `Author: ${myLibrary[i].author}`;
    pagesOutput.innerText = `Length: ${myLibrary[i].pages} pages`;
    if(read.checked != true) readOutput.innerText = ('Status: to Read')
    if(read.checked == true) readOutput.innerText = ('Status: Read')
   
    //append DOM elements
    bookDisplay.appendChild(bookDiv);
    bookDiv.appendChild(titleOutput);
    bookDiv.appendChild(authorOutput);
    bookDiv.appendChild(pagesOutput);
    bookDiv.appendChild(readOutput);

    //create remove button
    let rmvBtn = document.createElement('button');
    rmvBtn.classList.add('removeBook');
    /* style btn */
    rmvBtn.style.marginTop = "10px"
    rmvBtn.innerText = "remove book";
    bookDiv.appendChild(rmvBtn)
  }
  }
}

outputToLibrary()

let buttons = document.getElementsByClassName('removeBook');
let allbook = document.getElementsByClassName('bookDOM');
console.log(allbook)
console.log(buttons)

for(i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', function(e) {
      e.target.style.background = "green";
      console.log(div.allbook)
      console.log(allbook[1])
    })
  }

  /* for overlay form*/
  function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }