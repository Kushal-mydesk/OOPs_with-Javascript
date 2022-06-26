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

/**
 * There are different ways to implement inheritance. Here are the three different types:
       Prototypal inheritance
       Pseudoclassical inheritance
       Functional inheritance
*/

//Protoypal Inheritence 
let Car = {
    color: "Red",
};
let BMW = {
    make: "BMW",
};

BMW.__proto__ = Car;

//We can find both properties in BMW now:
console.log("This is a " + BMW.color + " " + BMW.make);

//Pseudoclassical Inheritence

function SportsCar(make,color,speed){
    this.make = make ;
    this.color = color;
    this.speed = speed;

}

var Toyota = new SportsCar("Toyota","Red", "100mph");
var Bentley = new SportsCar("Bentley","Blue","120mph");
var Ford = new SportsCar("Ford","Blue","120mph");

SportsCar.prototype.dialogue = function(){
    console.log(
        `I am a  ${this.color} ${this.make} with ${this.speed} speed`
    );
}


console.log(Toyota.dialogue());
console.log(Bentley.dialogue());
console.log(Ford.dialogue());


//Functional Inheritence

function people(data){
    let that = {};
    that.name = data.name;
    return that;
}

//Creating a child object that will inherit from the base class

function Employee(data){
    let that = people(data);
    that.sayHello = function(){
        return `Hello, I am ${that.name}`
    };
    return that;
}

var newEmployee =  new Employee({name : "Kushal"});
console.log(newEmployee.sayHello());


//Abstraction

function person(fname,lname){
    let firstName = fname;
    let lastName = lname;

    let getDetails_noaccess = function (){
        return (`First Name is : ${firstName}, Last Name is : ${lastName}`);
    }

    this.getDetails_access = function(){
        return (`First Name is : ${firstName}, Last Name is : ${lastName}`);
    }
}

let person1 = new person('Kushal','Mondal');
console.log(person1.firstName);
console.log(person1.getDetails_noaccess);
console.log(person1.getDetails_access());


//Encapsulation

class Person {
    constructor(name,id){
        this.name = name;
        this.id = id;
    }

    add_Address(add){
        this.add = add;
    }

    getDetails(){
        console.log(`Name is ${this.name} , Address is ${this.add}`);
    }
}

let person2 = new Person('Kushal', 21);
person2.add_Address('Kolkata');
person2.getDetails();


//Polymrphism


class A{
    display(){
        console.log("A is invoked");
    }

}
class B extends A{}
var b = new B();
b.display();

class C  extends A{
    display(){
        console.log("C is invoked");
    }
}

var a = [new A(),new C()];
a.forEach(function(msg) {
    msg.display();
});
