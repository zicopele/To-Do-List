// Function to add a new task
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const taskList = document.getElementById("taskList");
        const newTask = document.createElement("li");
        newTask.innerText = taskText;
        taskList.appendChild(newTask);
        taskInput.value = "";
    }
}
