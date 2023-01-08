const form = document.querySelector('.creation-window');
form.classList.add("inactive");
form.style.display = "none";

const libraryContainer = document.querySelector('.library');
libraryContainer.classList.add("opaque");

const books = document.querySelector('.books-container');

const libraryTransparentOpacity = 0.2;

let library = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    addBookToLibrary(formData);

    toggleForm();
    toggleLibraryOpacity(libraryTransparentOpacity);

    document.querySelector('.form').reset();
});

function addBookToLibrary(formData) {
    const newBook = createBookFromFormData(formData);

    library.push(newBook);
    console.log(library[0]);

    addBookToDOM(newBook);
}

function addBookToDOM(book) {
    const newBook = document.createElement('div');
    newBook.classList.add("book");
    
    const nameNode = createParagraphNodeWithText("Name: " + book.name);
    const authorNode = createParagraphNodeWithText("Author: " + book.author);
    const pageNode = createParagraphNodeWithText("Pages: " + book.numPages);
    const readNode = createParagraphNodeWithText("Read: " + (book.read ? "True" : "False"));

    newBook.appendChild(nameNode);
    newBook.appendChild(authorNode);
    newBook.appendChild(pageNode);
    newBook.appendChild(readNode);

    books.appendChild(newBook);
}

function createParagraphNodeWithText(text) {
    const para = document.createElement('p');
    const node = document.createTextNode(text);
    para.appendChild(node);

    return para;
}

function createBookFromFormData(formData) {
    const name = formData.get("name");
    const author = formData.get("author");
    const pageCount = formData.get("pageCount");
    const read = formData.get("read") === null ? false : true;
    
    return new Book(name, author, pageCount, read);
}

function toggleForm() {
    if (form.classList[1] === "inactive") {
        form.classList.replace("inactive", "active");
        form.style.display = "block";
        return;
    }

    form.classList.replace("active", "inactive");
    form.style.display = "none";
}

function toggleLibraryOpacity(opacity = 0.3) {
    if (libraryContainer.classList[1] === "opaque") {
        libraryContainer.classList.replace("opaque", "transparent");
        libraryContainer.style.opacity = opacity;
        return;
    }

    libraryContainer.classList.replace("transparent", "opaque");
    libraryContainer.style.opacity = 1.0;
}

document.onkeydown = function(e) {
    if (e.key === "Escape") {
        form.classList[1] = "inactive";
        form.style.display = "none";

        libraryContainer.classList[1] = "opaque";
        libraryContainer.style.opacity = 1.0;
    }
}

const addButton = document.querySelector('.add');
addButton.addEventListener('click', (e) => {
    toggleForm();
    toggleLibraryOpacity(libraryTransparentOpacity);
});