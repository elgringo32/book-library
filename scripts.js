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

  buildCard(addBookSubmitInput);
  // myLibrary.forEach(book => buildCard(book));
}

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
    divCardTitle.innerHTML = item['book-name'];
    divCardBody.appendChild(divCardTitle);

    var divCardSubTitle = document.createElement('h6');
    divCardSubTitle.classList.add('card-subtitle','mb-2','text-muted');
    divCardSubTitle.innerHTML = item['book-author'];
    divCardBody.appendChild(divCardSubTitle);
    
    var divCardText = document.createElement('div')
    divCardText.classList.add('card-text');
    divCardText.innerHTML = "Pages: " + item['book-page-count'];
    divCardBody.appendChild(divCardText);
    // var divCardDelete = document.createElement('a').classList.add('card-link');

}



