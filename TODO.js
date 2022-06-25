function createTask(description,status){
    class Task{
        constructor(description,status){
            this.description = description;
            this.status = status;
        }
    }
    return new Task(description,status);
}

const Task = createTask('Homework','ACTIVE');
console.log(Task.status);