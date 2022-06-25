// 'var' keyword actually breaks the rule of scoping,
// it doesnot let the variable stay at its local scope, it can be
// easily accesible outside the code-block

// Where as the 'let' keyword actually let the declared variable 
// stay inside its local scope
 

// there is 'const' keyword for assigning constants

function sayHello(){
    for(let i =0; i<5;i++){
        console.log(i);
    }
    //with 'var' we can access the 'i' variable here also, but not with 'let' keyword
    //console.log(i);
}
sayHello();



// objects

const person = {
    name : 'Kushal',
    walk: function(){}, //this is a method with pre-es6 syntax
    talk(){
        console.log("Loook! I can talk");
    }   // this is the modern es6 syntax
}

// accessing the member
// we generally use '.' dot operator when we know what property to access directly
// we use [] bracket operator when we dont know what kind of property to access in forward time
console.log(person['name']);
person.talk();
person['name'] = 'Kion';
console.log(person.name);


// Now we are going to learn about charateristics & behaviour of 'this' keyword 
//'this' keyword does not bahve like anyother program like java, in here , if we 
// call 'this' in a function it will always return as the reference of that object,
// But this doesnot happen all the time
const person2 = {
    name : 'Kushal',
    walk(){
        console.log(this);
    }
};

person2.walk();
const walk_line = person2.walk;   // storing the function reference in an variable, and now it is the function
console.log(walk_line);
//walk_line();


//Binding 'this'
// with this technique we can bind 'this' keyword as a form where it doesnot matter
// how we call the function it will always return the reference
const walk = person.walk.bind(person);
//walk();

// Arrow funstions

// this is the syntax for the previous function syntax in js
const square =  function (number) {
    return number * number ;
}

// Es6 arrow function
// If we have one statement line on the function body then the {} & 'return' keyword can be excluded 
// if the function have only one parameter then the () can be excluded 
const square2 = (number) =>{
    return number * number;
}


console.log(square(2));
console.log(square2(5));

// useful scenarios

const jobs = [
    {id :1 , isActive : true},
    {id :2 , isActive : true},
    {id :3 , isActive : false}
];

// getting the active jobs, filtering the jobs based on the isActive value and storing it in a constant

const activejobs = jobs.filter(function(job) { return job.isActive;});

const activejobs2  = jobs.filter(job => job.isActive);



// Arrow function with this
// Arrow function dont rebind 'this' keyword

const person3 = {
    talk(){
        let self = this;
        setTimeout(() => {
            console.log("this" , this);
        }, 1000);
    }
};
// As we have use arrow function here, 'this' is not reset. and it inherites the context 
//  in which the whole code is defined
person3.talk();



// Array.map()

const colors = ['red', 'blue', 'green'];
// inside map() we have to pass the arrow function as a callback function that would 
// put the colors from the array into different list with template literals

const item = colors.map((color) => {return `<li>${color}</li>`});
console.log(item);



// Object Destructuring

const address = {
    street:'',
    city:'',
    country:''
};
// If we ever needed to assign the values to address's prop individually, then we have to do it like that
/**
 * const street = address.street;
 * const city = address.city;
 * const country = address.country;
 */
// But with object destructuring

const{street,city,country} = address;
// thus, we are saying that apply this values to the address's properties respectively
// we can also set one value into one property, then we have remove the other ones
const{street:st} = address;

console.log(address.street);





// Spread operator
/**
 * '...' denoted with these 3 dots, it also to clone any variable to work with just 
 * like shown in the bottom
 */
const first = [1,2,3];
const second = [4,5,6];

const conbined = first.concat(second);
const combined2 = [...first,'a',...second,'b'];
console.log(combined2);

// cloning the first array
const clone =[...first];

// Applying it on object

const obj = {
    name: 'Kushal'
};

const obj2 = { 
    job:'Developer'
};

// lets think we need to have this properties into another object
//  we can also have extra properties


const obj3 ={
    ...obj,
    ...obj2,
    location:'India'
};
console.log(obj3);




/**
 * Classes
 */
// Why we need classes everybody know that, because it helps to create
// as many objects as we want

class Person{
    //we can have a constructor function to initialize the objects
    constructor(name){
        this.name;
    }

    walk(){
        console.log('Walk');
    }
}


const person_obj = new Person("Kushal");


//Inheritence
//It actually helps to inherit the functionalities from a class to another
class Teacher extends Person{
    //if we are having a constructor of the sub-class,
    // then we also have to give a super() call to the parent-class
    constructor(name,degree){
        super(name);
        this.degree ;
    }
    teach(){
        console.log('Teach');
    }
}


const teacher = new Teacher("Kushal","MCA");


console.log(Object.keys(teacher));
console.log(Object.values(teacher));
teacher.teach();

class Circle{
    constructor(radius){
        this.radius = radius;
    }

    area(){
        return Math.PI * this.radius*this.radius;
    }
}

const circle = new Circle(2);
const result = circle.area();
console.log(result.toFixed(2));