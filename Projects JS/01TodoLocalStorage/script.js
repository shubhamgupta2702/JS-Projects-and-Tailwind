document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById("todo-input")
    const addTaskBtn = document.getElementById("add-task-btn")
    const todoList = document.getElementById("todo-list")


let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

tasks.forEach((task) => renderTask(task));

addTaskBtn.addEventListener('click' , () => {
    const taskText = todoInput.value.trim();

    if(taskText == "") return;

    const newTask = {
        id: Date.now(),
        completed: false,
        text: taskText
    }

    tasks.push(taskText);
    saveTask();
    todoInput.value = "" // Clear input
    console.log(newTask);
    
});

function renderTask(task){
    console.log(task);
    
}

function saveTask(){
    localStorage.setItem("tasks" , JSON.stringify(tasks));
}
})