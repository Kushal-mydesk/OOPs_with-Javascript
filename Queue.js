class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(item){
        this.items.push(item);
    }

    peek(){
        return this.items[0];
    }
    dequeue(){
        if(this.items.length === 0){
            return null;
        }
        return this.items.shift();
    }

    size(){
        return this.items.length;
    }
}

const Meal = new Queue();

Meal.enqueue('Biryani');
Meal.enqueue('Jhol');
Meal.enqueue('Mithai');
Meal.dequeue();
console.log(Meal);
console.log(Meal.peek());
console.log(Meal.size());