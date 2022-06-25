class MyStack{
    constructor(){
        this.items = [];
    }

    push(item){
        this.items.push(item);
    }
    pop(){
        return this.items.pop();
    }

    tos(){
        if(this.items.length == 0){
            return null;
        }
        return this.items[this.items.length-1];
    }

    getSize(){
        return this.items.length;
    }

    isEmpty(){
        return this.getSize() === 0;
    }
}
console.time('Slow');
const Meal = new MyStack();

Meal.push('Biryani');
Meal.push('Jhol');
Meal.push('Mithai');
Meal.pop();
console.log(Meal);
console.log(Meal.tos());
console.log(Meal.isEmpty());

console.timeEnd('Slow');

