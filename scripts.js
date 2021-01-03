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
    divCard.setAttribute('data-index', myLibrary.indexOf(item));
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

    var divCardSubTitle = document.createElement('h6');
    divCardSubTitle.classList.add('card-subtitle','mb-2','text-muted');
    divCardSubTitle.innerHTML = item.author;
    divCardBody.appendChild(divCardSubTitle);
    
    var divCardText = document.createElement('div')
    divCardText.classList.add('card-text');
    divCardText.innerHTML = `Pages: ${item.pages}`;
    divCardBody.appendChild(divCardText);

    var divCardRead = document.createElement('div')
    divCardRead.classList.add('card-read');
    if (item.read) {
      divCardRead.innerHTML = 'Read';
    }
    else {
      divCardRead.innerHTML = 'Not Read';
    }
    divCardBody.appendChild(divCardRead);
    
    var divCardDelete = document.createElement('a')
    divCardDelete.classList.add('card-link');
    divCardDelete.setAttribute('href','#')
    divCardDelete.innerHTML = 'Remove';
    divCardBody.appendChild(divCardDelete);

    let deleteLinks = document.querySelectorAll('.card-link');
    deleteLinks.forEach(item => item.addEventListener('click',removeBook));
}


function removeBook(el) {
  console.log(this.object);
  console.log(el);
}



