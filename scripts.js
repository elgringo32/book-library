let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  var bookTitle = document.getElementById('book-title').value;
  var bookAuthor = document.getElementById('book-author').value;
  var bookPages = document.getElementById('book-pages').value;
  var readStatus = document.getElementsByClassName('form-check-input')[0].checked;

  var book = new Book(bookTitle, bookAuthor, bookPages, readStatus);
  
  myLibrary.push(book);
  console.log(myLibrary);

  buildCard(book);
  // myLibrary.forEach(book => buildCard(book));
}

var currentReadStatus = document.getElementsByClassName('form-check-input')[0];

function updateReadStatus() {
  console.log(this);  
  console.log(currentReadStatus);
  if (currentReadStatus) {
    console.log('check');
    document.getElementsByClassName('form-check-label')[0].innerHTML = "Yes"
  }
  else {
    document.getElementsByClassName('form-check-label')[0].innerHTML = "No"
  }
}

currentReadStatus.addEventListener('click', updateReadStatus);

document.getElementById('add-book-submit').addEventListener('click', addBookToLibrary);

function buildCard(item) {
    var divBooks = document.querySelector('#all-cards');
    
    var divCard = document.createElement('div')
    divCard.classList.add('card');
    divCard.style.cssText = "width: 18rem;"
    divBooks.appendChild(divCard);
    
    var divCardBody = document.createElement('div');
    divCardBody.classList.add('card-body');
    divCard.appendChild(divCardBody);

    var divCardTitle = document.createElement('h5');
    divCardTitle.classList.add('card-title');
    divCardTitle.innerHTML = item.title;
    divCardBody.appendChild(divCardTitle);

    var divCardAuthor = document.createElement('h6');
    divCardAuthor.classList.add('card-subtitle','mb-2','text-muted');
    divCardAuthor.innerHTML = item.author;
    divCardBody.appendChild(divCardAuthor);
    
    var divCardPages = document.createElement('div')
    divCardPages.classList.add('card-text');
    divCardPages.innerHTML = `Pages: ${item.pages}`;
    divCardBody.appendChild(divCardPages);

    var divCardRead = document.createElement('div')
    divCardRead.classList.add('card-read');
    if (item.read) {
      divCardRead.innerHTML = 'Read';
    }
    else {
      divCardRead.innerHTML = 'Not Read';
    }
    divCardBody.appendChild(divCardRead);
    
    var divCardDeleteBtn = document.createElement('a')
    divCardDeleteBtn.setAttribute('data-index', myLibrary.indexOf(item));
    divCardDeleteBtn.classList.add('card-link');
    divCardDeleteBtn.setAttribute('href','#')
    divCardDeleteBtn.innerHTML = 'Remove';
    divCardBody.appendChild(divCardDeleteBtn);

    divCardDeleteBtn.addEventListener('click', () => {
      myLibrary.splice(myLibrary.indexOf(item),1);
      rebuildLibrary();
    })
}


function removeBook(el) {
  console.log(this.object);
  console.log(el);
}

function rebuildLibrary() {
  const bookContainer = document.querySelector('#all-cards');
  const books = document.querySelectorAll('.card');
  books.forEach(book => bookContainer.removeChild(book));
  
  myLibrary.forEach(item => buildCard(item));
}



