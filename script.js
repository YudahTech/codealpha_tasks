// const add = document.querySelector("button"),
// input = document.querySelector("input"),
// clearTasks = document.querySelector(".clear-tasks"),

// todoList = document.querySelector("ol");


// // Add Task
// const addTask = (e) => {
//     e.preventDefault();
//     const newLi = document.createElement("li");
//     const deleteBtn = document.createElement("button");

//     deleteBtn.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`;

//     if (input.value !== "") {
//         newLi.textContent = input.value;
//         newLi.appendChild(deleteBtn);
//         todoList.appendChild(newLi);
//         input.value = "";
//     } else {
//         alert("Input something!");
//     }

// // remove task
// function removeTask() {
//     const del = confirm("Are you sure you want to delete this this task")
//     if (del == true) {
//         const parent = this.parentNode
//         parent.remove()
//     }
// }

//     deleteBtn.addEventListener("click", removeTask)


// }

// add.addEventListener("click", addTask);

// clearTasks.addEventListener("click", function () {
//     todoList.innerHTML = ""
// })