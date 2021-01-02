let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  var title = document.querySelectorAll('input');
  console.log(title);
}

document.getElementById('add-book-submit').addEventListener('click', addBookToLibrary);
