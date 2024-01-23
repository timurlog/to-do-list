let addBtn = document.querySelector('#tdlInputAdd');
let newTaskName = document.querySelector('#tdlNewInput');
let inputAlert = document.querySelector('.input-alert');

function creatNewTask() {
    let taskCard = document.createElement('div');
    taskCard.className = 'output-card';

    if (newTaskName.value === "") {
        inputAlert.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Error : Please enter a name for the task`
        return
    }

    taskCard.innerHTML = `
        <div class="card-task-name">
            <input readonly maxlength="25" value="${newTaskName.value}" type="text" name="new-to-do-list" class="task-name-input">
        </div>
        <div class="card-buttons">
            <div class="button-container">
                <button onclick="sound('./public/assets/music/click-sound.mp3')" class="tdl-card-btn">Done</button>
            </div>
            <div class="button-container">
                <button onclick="sound('./public/assets/music/click-sound.mp3')" class="tdl-card-btn">Edit</button>
            </div>
            <div class="button-container-d">
                <button onclick="sound('./public/assets/music/click-sound.mp3')" class="tdl-card-btn">Delete</button>
            </div>
            <div class="button-containers">
                <button onclick="sound('./public/assets/music/click-sound.mp3')" class="tdl-card-btn delete-yes">Yes</button>
                <button onclick="sound('./public/assets/music/click-sound.mp3')" class="tdl-card-btn delete-no">No</button>
            </div>
        </div>
    `;

    let output = document.querySelector('#tdlOutput');

    output.appendChild(taskCard);

    newTaskName.value = '';
    inputAlert.innerHTML = '';
}

addBtn.addEventListener("click", creatNewTask);

let allTask = document.querySelector("#tdlOutput");

function ftTarget(e) {
    console.log(e.target);
    e.target.style.border = 'red solid 1px'
}

allTask.addEventListener('click', ftTarget);