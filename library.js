const form = document.querySelector('.creation-window');
form.classList.add("inactive");
form.style.display = "none";

const libraryContainer = document.querySelector('.library');
libraryContainer.classList.add("opaque");

let library = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    addBookToLibrary(formData);
});

function addBookToLibrary(formData) {
    const newBook = createBookFromFormData(formData);

    library.push(newBook);
    console.log(library[0]);
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
        form.classList[1] = "active";
        form.style.display = "block";
        return;
    }

    form.classList[1] = "inactive";
    form.style.display = "none";
}

function toggleLibraryOpacity(opacity = 0.3) {
    console.log(libraryContainer.classList);
    if (libraryContainer.classList[1] === "opaque") {
        libraryContainer.classList[1] = "transparent";
        libraryContainer.style.opacity = opacity;
        return;
    }

    libraryContainer.classList[1] = "opaque";
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
    toggleLibraryOpacity(0.3);
});