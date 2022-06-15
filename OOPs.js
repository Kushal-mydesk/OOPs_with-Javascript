// this is a book object with explicit call/
const book1 = {
    Title: "Book One",
    Author: 'John Dao',
    Year:'2013',
    // This is a function of this object
    get_summary:function(){
        return this.Title  + " was written by "+ this.Author + " in " + this.Year  ;
    }
};
console.log(book1.get_summary());