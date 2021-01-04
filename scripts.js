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
}

function updateReadStatus(item) {
  if (item.toElement.checked) {
    item.toElement.nextElementSibling.innerHTML = "Yes"
  }
  else {
    item.toElement.nextElementSibling.innerHTML = "No"
  }
}

function getCurrentStatus() {
  var currentReadStatuses = document.querySelectorAll('.form-check-input');
  return currentReadStatuses;
}
getCurrentStatus().forEach(currentReadStatus => currentReadStatus.addEventListener('click', updateReadStatus,));


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

    var divCardReadForm = document.createElement('form');

    var divCardRead = document.createElement('div');
    divCardRead.classList.add('form-check');
    divCardRead.classList.add('form-switch');
    

    if (item.read) {
      var divCardReadInput = document.createElement('input');
      divCardReadInput.classList.add('form-check-input');
      divCardReadInput.setAttribute('type', 'checkbox');
      divCardReadInput.setAttribute('id', 'flexSwitchCheckChecked');
      divCardReadInput.checked = true;

    var divCardReadLabel = document.createElement('label')
    divCardReadLabel.classList.add('form-check-label');
    divCardReadLabel.setAttribute('for', 'flexSwitchCheckChecked');
    divCardReadLabel.innerHTML = 'Yes'
    }
    else {
      var divCardReadInput = document.createElement('input');
      divCardReadInput.classList.add('form-check-input');
      divCardReadInput.setAttribute('type', 'checkbox');
      divCardReadInput.setAttribute('id', 'flexSwitchCheckDefault');

      var divCardReadLabel = document.createElement('label')
      divCardReadLabel.classList.add('form-check-label');
      divCardReadLabel.setAttribute('for', 'flexSwitchCheckDefault');
      divCardReadLabel.innerHTML = 'No'
    }

    divCardBody.appendChild(divCardReadForm);
    divCardReadForm.appendChild(divCardRead);
    divCardRead.appendChild(divCardReadInput);
    divCardRead.appendChild(divCardReadLabel);
    
    
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
    getCurrentStatus().forEach(currentReadStatus => currentReadStatus.addEventListener('click', updateReadStatus));
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



