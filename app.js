window.onload = function() {
    displayTask();
}

const add = document.querySelector("button"),
input = document.querySelector("input"),
clearTasks = document.querySelector(".clear-tasks"),

todoList = document.querySelector("ol");


let tasks;

add.addEventListener("click", addTask);
function getTask() {
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
}

function addTask() {
    if (input.value !== "") {
        addTaskToLs();
        todoList.innerHTML = ""
        displayTask();
    } else {
        alert("Enter a Task")
    }
}

function addTaskToLs() {
    getTask();
    tasks.push(input.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    input.value = "";
}

function displayTask() {

    getTask()

    tasks.forEach((task, index) => {
        newLi = document.createElement("li");
    deleteBtn = document.createElement("button")
    editBtn = document.createElement("span")
    deleteBtn.innerHTML = `<i class="fa fa-trash" aria-hidden="true" id="${index}" onclick="deleteTask(this.id)"></i>`
    editBtn.innerHTML = `<i class="fa fa-pencil" id="${index}" onclick="editTask(this.id)"></i>
    `
    newLi.appendChild(document.createTextNode(task))
    newLi.appendChild(deleteBtn);
    newLi.appendChild(editBtn);
    todoList.appendChild(newLi);
    });


}

function deleteTask(index) {
    const del = confirm("Are you sure you want to delete this item ?")
    if (del == true) {
        getTask()
    }

    tasks.splice(index, 1)
    todoList.innerHTML = ""
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTask();
}

clearTasks.addEventListener("click" ,clearAllTasks);

function clearAllTasks() {
    const deleteAllTasks = confirm("Are you want to delete all Tasks")

    if (deleteAllTasks === true) {
        localStorage.clear();
    todoList.innerHTML = "";
    displayTask();
    }

}

function editTask(index) {
    let updatedTodo = prompt("Edit task:", tasks[index]);
                if (updatedTodo === true) {
                    getTask()
  }
  tasks[index] = updatedTodo;
  todoList.innerHTML = ""
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTask();
}












