// Get DOM elements
const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add task via button click
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    addTask(taskText);
    taskInput.value = '';
    taskInput.focus();
  }
});

// Add task via Enter key press
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addBtn.click(); // Simulate add button click
  }
});

// Function to add task
function addTask(taskText) {
  const li = document.createElement('li');

  // Task text span
  const span = document.createElement('span');
  span.textContent = taskText;

  // Toggle 'completed' class on click
  span.addEventListener('click', () => {
    span.classList.toggle('completed');
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}
