let library = [];

function addBookToLibrary() {
    const name = prompt("What is the book's name?");
    const author = prompt("What is the author's name?");
    const numPages = prompt("How many pages is the book?");
    const read = confirm("Have you read this book before?");
    
    const newBook = new Book(name, author, numPages, read);
    library.push(newBook);
}

const addButton = document.querySelector('.add');
addButton.addEventListener('click', addBookToLibrary);

const form = document.querySelector('.creation-window');
form.style.display = "none";
form.style.display = "block";