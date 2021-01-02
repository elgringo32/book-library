let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  var addBookSubmitInput = document.querySelectorAll('input');
  
  addBookSubmitInput = Array.from(addBookSubmitInput).reduce((acc,input) => ({...acc,[input.id]:input.value}),{});
  myLibrary.push(addBookSubmitInput);
  console.log(myLibrary);
}


document.getElementById('add-book-submit').addEventListener('click', addBookToLibrary);
