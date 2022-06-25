/**
 * Description

Problem Statement: Implement a class with a constructor that takes in a single parameter, a number N. The class exposes a single method: next, which returns the next positive integer starting from N, every time it is called.


Input Format: A number, can be positive or negative


Constraints


Output Format: next() will be called thrice, the output should be the 3 values from each call to next
*/
class MyCounter{

    constructor(N){
        this.N = N-1;
    }

    next(){
        this.N = this.N + 1;
        return this.N;
    }
}


const counter = new MyCounter(3);
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());