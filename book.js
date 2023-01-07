function Book(name, author, numPages, read) {
    this.name = name;
    this.author = author;
    this.numPages = numPages;
    this.read = read;
}

Book.prototype.info = function() {
    output = this.name + " by " + this.author + ", " + this.numPages + " pages, ";

    if (this.read) {
        output += "this has been read";
    } else {
        output += "not read yet"
    }

    return output;
}