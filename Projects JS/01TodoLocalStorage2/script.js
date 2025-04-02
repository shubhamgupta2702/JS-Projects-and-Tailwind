document.addEventListener("DOMContentLoaded" , () => {
    const todoInput = document.getElementById("todo-input");
    const addTaskBtn = document.getElementById("add-task-btn")
    const todoList = document.getElementById("todo-list")
    
    let tasks = [];

    addTaskBtn.addEventListener('click' , () => {
    const taskText = todoInput.value.trim()

    if(taskText == "") return;

    const newTask = {
        id: Date.now(),
        completed: false,
        text: taskText
    }

    tasks.push(newTask);
    
    todoInput.value = "";   // clear Input
    console.log(tasks);
    
    })
})