function addTask(e) {
    e.preventDefault();
    const taskInput = document.querySelector('#taskInput');
    myTasks.push(taskInput.value);
    // Vacío el contenido del input field
    taskInput.value = '';
    paintTasks();
}

function paintTasks() {
    const taskList = document.querySelector('#taskList');
    let listHtml = '';
    for(let i=0; i<myTasks.length; i++) {
        listHtml += `<li>${myTasks[i]}</li>`;
    }
    taskList.innerHTML = listHtml;
}

const myTasks = [];

const addTaskButton = document.querySelector('#addTaskButton');
addTaskButton.addEventListener('click', (event) => addTask(event));

