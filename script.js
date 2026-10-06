const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

function updateTaskCount() {
  const remainingTasks = document.querySelectorAll(
    "#taskList li:not(.completed)"
  ).length;

  taskCount.textContent = remainingTasks;
}

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const listItem = document.createElement("li");

  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText;

  const completeButton = document.createElement("button");
  completeButton.textContent = "✓";
  completeButton.className = "complete-btn";

  completeButton.addEventListener("click", function () {
    listItem.classList.toggle("completed");
    updateTaskCount();
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "×";
  deleteButton.className = "delete-btn";

  deleteButton.addEventListener("click", function () {
    listItem.remove();
    updateTaskCount();
  });

  listItem.appendChild(taskSpan);
  listItem.appendChild(completeButton);
  listItem.appendChild(deleteButton);

  taskList.appendChild(listItem);

  taskInput.value = "";

  updateTaskCount();
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});