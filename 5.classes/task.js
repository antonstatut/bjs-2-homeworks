class PrintEditionItem{
  constructor(name, releaseDate, pagesCount, state, type = null){
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = type;
  }
  fix(){
    this.state = this.state * 1.5
  }
  set state(newState){
    if(newState < 0){
        this._state = 0;
    } else if(newState > 100){
        this._state = 100;
    }else{
        this._state = newState;
    }
  }
  get state(){
    return this._state;
  }
}
class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state, type){
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount, state, type){
        super(name, releaseDate, pagesCount, state);
        this.type = "book";
        this.author = author;
    }
}
class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state, type){
        super(author, name, releaseDate, pagesCount, state)
        this.type = "novel";
    }
}
class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state, type){
        super(author, name, releaseDate, pagesCount, state)
        this.type = "fantastic";
    }
}
class DetectiveBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state, type){
        super(author, name, releaseDate, pagesCount, state)
        this.type = "detective";
    }
}
class Library{
    constructor(name, books){
        this.name = name;
        this.books = [];
    }
    addBook(book){
        if(book.state > 30){
            this.books.push(book);
        }
    }
    findBookBy(type, value){
        for (let i = 0; i < this.books.length; i++) {
            const findBook = this.books[i];
            if (findBook && findBook[type] !== undefined && findBook[type] === value) {
                return findBook;
            }
        }
        return null;
    }
    giveBookByName(bookName) {
        const index = this.books.findIndex(book => book.name === bookName);
        if (index !== -1) {
            const book = this.books[index];
            this.books.splice(index, 1);
            return book;
        } else {
            return null;
        }
    }
}
