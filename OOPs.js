// this is a book object with explicit call/
const book1 = {
    Title: "Book One",
    Author: 'John Dao',
    Year:'2013',
    // This is a function of this object
    get_summary:function(){
        return `${this.Title} was written by ${this.Author} in ${this.Year}`;
    }
};
console.log(book1.get_summary());


//Constructor

function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
    this.get_summary = function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}


const book_1 = new Book('Book_One', 'Kion Dao' , '2013');
console.log(book_1.get_summary());


//Prototype Function
//That function which may not be included in the definition but might e useful in some scenarios
Book.prototype.get_age = function(){
    const years_in_age = new Date().getFullYear() - this.year;
    return years_in_age;
}

Book.prototype.isRevised = function(new_year){
    this.year = new_year;
    this.isRevised = true;
}

console.log(book_1.get_age());
book_1.isRevised('2020');
console.log(Object.values(book_1));


//Inheritence
//Inheriting properties from a parent class to child class

//Inheriting prototype

class Books{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year
    }
    get_summary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

class Magazine extends Books{
    constructor(title,author,year,month){
        super(title,author,year);
        this.month = month;
    }
    
}

const Mag_one = new Magazine('Mag_one','Kushal', '2020','jan');
console.log(Mag_one.get_summary());
console.log(Object.values(Mag_one));


