import { menuCards, menuFilterItems } from "./main.js";

let newTaskName = document.querySelector('#tdlNewInput');
let inputAlert = document.querySelector('.input-alert');

export function createNewTask() {
    const taskName = newTaskName.value.trim();

    if (taskName === "") {
        inputAlert.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Error : Please enter a name for the task`
        return
    }

    const newTaskCard = document.createElement("div");
    newTaskCard.className = "output-card inProgress";

    const taskNameDiv = document.createElement("div");
    taskNameDiv.className = "card-task-name";
    const taskNameInput = document.createElement("input");
    taskNameInput.readOnly = true;
    taskNameInput.maxLength = 25;
    taskNameInput.value = taskName;
    taskNameInput.type = "text";
    taskNameInput.name = "new-to-do-list";
    taskNameInput.className = "task-name-input";
    taskNameDiv.appendChild(taskNameInput);

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "card-buttons";

    const buttonContainerDiv1 = document.createElement("div");
    buttonContainerDiv1.className = "button-container";
    buttonsDiv.appendChild(buttonContainerDiv1);

    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.className = "tdl-card-btn";
    let j = true;
    doneButton.addEventListener("click", () => {
        if (j == true) {
            newTaskCard.className = "output-card isDone";
            taskNameInput.style.color = '#21D5A0';
            doneButton.textContent = "Unfinish";
            j = false
        } else {
            newTaskCard.className = "output-card inProgress";
            taskNameInput.style.color = '#D5A021';
            doneButton.textContent = "Done";
            j = true
        }
        menuCards = document.querySelectorAll('.output-card');
    });
    
    const buttonContainerDiv2 = document.createElement("div");
    buttonContainerDiv2.className = "button-container";
    buttonsDiv.appendChild(buttonContainerDiv2);
    
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "tdl-card-btn";
    let i = true;
    editButton.addEventListener("click", () => {
        if (taskNameInput.value === "") {
            tdlOutput.removeChild(newTaskCard);
            return
        }

        if (i == true) {
            taskNameInput.readOnly = false;
            taskNameInput.style.borderBottom = '#4B4237 solid 2px';
            editButton.textContent = "Confirm";
            i = false
        } else {
            taskNameInput.readOnly = true;
            taskNameInput.style.borderBottom = '';
            editButton.textContent = "Edit";
            i = true
        }
    });
    taskNameInput.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            if (taskNameInput.value === "") {
                tdlOutput.removeChild(newTaskCard);
                return
            }
            taskNameInput.readOnly = true;
            taskNameInput.style.borderBottom = '';
            editButton.textContent = "Edit";
            i = true
        }
    });
    
    const buttonContainerDiv3 = document.createElement("div");
    buttonContainerDiv3.className = "button-container-d";
    buttonsDiv.appendChild(buttonContainerDiv3);
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "tdl-card-btn";
    deleteButton.addEventListener("click", () => {
        buttonContainerDiv3.style.display = 'none'
        buttonContainerDiv4.style.display = 'flex'
    });
    
    const buttonContainerDiv4 = document.createElement("div");
    buttonContainerDiv4.className = "button-containers";
    buttonsDiv.appendChild(buttonContainerDiv4);
    
    const deleteYesButton = document.createElement("button");
    deleteYesButton.textContent = "Yes";
    deleteYesButton.className = "tdl-card-btn delete-yes";
    deleteYesButton.addEventListener("click", () => {
        tdlOutput.removeChild(newTaskCard);
    });
    
    const deleteNoButton = document.createElement("button");
    deleteNoButton.textContent = "No";
    deleteNoButton.className = "tdl-card-btn delete-no";
    deleteNoButton.addEventListener("click", () => {
        buttonContainerDiv3.style.display = 'block'
        buttonContainerDiv4.style.display = 'none'
    });

    buttonContainerDiv1.appendChild(doneButton);
    buttonContainerDiv2.appendChild(editButton);
    buttonContainerDiv3.appendChild(deleteButton);
    buttonContainerDiv4.appendChild(deleteYesButton);
    buttonContainerDiv4.appendChild(deleteNoButton);

    newTaskCard.appendChild(taskNameDiv);
    newTaskCard.appendChild(buttonsDiv);

    const tdlOutput = document.querySelector("#tdlOutput");
    
    if (tdlOutput.children.length > 0) {
        tdlOutput.insertBefore(newTaskCard, tdlOutput.firstElementChild);
    } else {
        tdlOutput.appendChild(newTaskCard);
    }

    newTaskName.value = "";
    inputAlert.innerHTML= "";
}