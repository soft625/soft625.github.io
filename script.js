document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const taskList = document.getElementById('taskList');
        const taskItem = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Editar';
        editBtn.classList.add('edit-btn');
        editBtn.addEventListener('click', () => {
            editTask(taskSpan);
        });

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Completar';
        completeBtn.classList.add('complete-btn');
        completeBtn.addEventListener('click', () => {
            moveToCompleted(taskItem, taskSpan);
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Eliminar';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskSpan);
        taskItem.appendChild(editBtn);
        taskItem.appendChild(completeBtn);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        taskInput.value = '';
    } else {
        alert('Por favor, escribe una tarea.');
    }
}

function editTask(taskSpan) {
    const newText = prompt('Editar tarea:', taskSpan.textContent);
    if (newText !== null && newText.trim() !== '') {
        taskSpan.textContent = newText.trim();
    }
}

function moveToCompleted(taskItem, taskSpan) {
    const completedTaskList = document.getElementById('completedTaskList');

    taskItem.innerHTML = '';
    taskSpan.classList.add('completed');

    const restoreBtn = document.createElement('button');
    restoreBtn.textContent = 'Restaurar';
    restoreBtn.classList.add('restore-btn');
    restoreBtn.addEventListener('click', () => {
        moveToPending(taskItem, taskSpan);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        completedTaskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(restoreBtn);
    taskItem.appendChild(deleteBtn);
    completedTaskList.appendChild(taskItem);
}

function moveToPending(taskItem, taskSpan) {
    const taskList = document.getElementById('taskList');

    taskItem.innerHTML = '';
    taskSpan.classList.remove('completed');

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Editar';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', () => {
        editTask(taskSpan);
    });

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Completar';
    completeBtn.classList.add('complete-btn');
    completeBtn.addEventListener('click', () => {
        moveToCompleted(taskItem, taskSpan);
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    taskItem.appendChild(taskSpan);
    taskItem.appendChild(editBtn);
    taskItem.appendChild(completeBtn);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);
}
