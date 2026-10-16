// Store tasks in an array
let tasks = [];

// Select HTML elements
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Function to display tasks
function renderTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${task}</span>
            <button class="delete-btn" data-index="${index}">
                Delete
            </button>
        `;

        taskList.appendChild(li);

    });

}

// Add Task
addBtn.addEventListener("click", () => {

    const task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task!");
        return;
    }

    tasks.push(task);

    taskInput.value = "";

    renderTasks();

});

// Add task when Enter key is pressed
taskInput.addEventListener("keypress", (event) => {

    if (event.key === "Enter") {
        addBtn.click();
    }

});

// Delete task using Event Delegation
taskList.addEventListener("click", (event) => {

    if (event.target.classList.contains("delete-btn")) {

        const index = event.target.dataset.index;

        tasks.splice(index, 1);

        renderTasks();

    }

});