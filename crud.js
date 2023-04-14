const form = document.querySelector('form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('#taskList');
let tasks = [];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const task = taskInput.value.trim();
  if (task !== '') {
    tasks.push(task);
    taskInput.value = '';
    renderTasks();
  }
});

function renderTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button class="edit" data-index="${index}">Edit</button>
      <button class="delete" data-index="${index}">Delete</button>
      <button class="complete-btn">Concluir</button>
    `;
    taskList.appendChild(li);
  });
}


taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('edit')) {
    const index = e.target.dataset.index;
    const newTask = prompt('Edit task:', tasks[index]);
    if (newTask !== null && newTask.trim() !== '') {
      tasks[index] = newTask.trim();
      renderTasks();
    }
  }
});


taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    const index = e.target.dataset.index;
    tasks.splice(index, 1);
    renderTasks();
  }
});





taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('complete-btn')) {
      event.target.parentNode.remove();
    }
  });

renderTasks();

