// script.js
document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', handleTaskClick);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-btn">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';
    }

    function handleTaskClick(e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        } else {
            e.target.classList.toggle('completed');
        }
    }
});
