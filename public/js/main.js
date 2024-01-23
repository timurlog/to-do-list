let addBtn = document.querySelector('#tdlInputAdd');
let newTaskName = document.querySelector('#tdlNewInput');
let inputAlert = document.querySelector('.input-alert');

// function creatNewTask() {
//     let taskCard = document.createElement('div');
//     taskCard.className = 'output-card';

//     if (newTaskName.value === "") {
//         inputAlert.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Error : Please enter a name for the task`
//         return
//     }

//     taskCard.innerHTML = `
//         <div class="card-task-name">
//             <input readonly maxlength="25" value="${newTaskName.value}" type="text" name="new-to-do-list" class="task-name-input">
//         </div>
//         <div class="card-buttons">
//             <div class="button-container">
//                 <button class="tdl-card-btn">Done</button>
//             </div>
//             <div class="button-container">
//                 <button class="tdl-card-btn">Edit</button>
//             </div>
//             <div class="button-container-d">
//                 <button class="tdl-card-btn">Delete</button>
//             </div>
//             <div class="button-containers">
//                 <button class="tdl-card-btn delete-yes">Yes</button>
//                 <button class="tdl-card-btn delete-no">No</button>
//             </div>
//         </div>
//     `;

//     let output = document.querySelector('#tdlOutput');

//     output.appendChild(taskCard);

//     newTaskName.value = '';
//     inputAlert.innerHTML = '';
// }

// addBtn.addEventListener("click", creatNewTask);

// let t;
// let allTask = document.querySelector("#tdlOutput");

// function ftTarget(e) {
//     // e.target.style.border = 'red solid 1px'
//     t = e.target;

//     if (t.innerHTML == "Done") {
        
//     }
// }

// allTask.addEventListener('click', ftTarget);



function createNewTask() {
    const taskName = newTaskName.value.trim();

    if (taskName === "") {
        inputAlert.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Error : Please enter a name for the task`
        return
    }

    // Créer un nouvel élément div avec la classe "output-card"
    const newTaskCard = document.createElement("div");
    newTaskCard.className = "output-card";

    // Créer un élément div avec la classe "card-task-name" contenant un input
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

    // Créer un élément div avec la classe "card-buttons" contenant les boutons
    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "card-buttons";

    const buttonContainerDiv1 = document.createElement("div");
    buttonContainerDiv1.className = "button-container";
    buttonsDiv.appendChild(buttonContainerDiv1);

    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.className = "tdl-card-btn";
    doneButton.addEventListener("click", () => {
        
    });
    
    const buttonContainerDiv2 = document.createElement("div");
    buttonContainerDiv2.className = "button-container";
    buttonsDiv.appendChild(buttonContainerDiv2);
    
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.className = "tdl-card-btn";
    editButton.addEventListener("click", () => {
        
    });
    
    const buttonContainerDiv3 = document.createElement("div");
    buttonContainerDiv3.className = "button-container-d";
    buttonsDiv.appendChild(buttonContainerDiv3);
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "tdl-card-btn";
    deleteButton.addEventListener("click", () => {
        
    });
    
    const buttonContainerDiv4 = document.createElement("div");
    buttonContainerDiv4.className = "button-containers";
    buttonsDiv.appendChild(buttonContainerDiv4);
    
    const deleteYesButton = document.createElement("button");
    deleteYesButton.textContent = "Yes";
    deleteYesButton.className = "tdl-card-btn delete-yes";
    deleteYesButton.addEventListener("click", () => {
        
    });
    
    const deleteNoButton = document.createElement("button");
    deleteNoButton.textContent = "No";
    deleteNoButton.className = "tdl-card-btn delete-no";
    deleteNoButton.addEventListener("click", () => {
        
    });
    
    // Ajoutez les boutons créés à la div "buttonsDiv"
    buttonContainerDiv1.appendChild(doneButton);
    buttonContainerDiv2.appendChild(editButton);
    buttonContainerDiv3.appendChild(deleteButton);
    buttonContainerDiv4.appendChild(deleteYesButton);
    buttonContainerDiv4.appendChild(deleteNoButton);
    
    // Ajoutez la div "taskNameDiv" et la div "buttonsDiv" à la nouvelle carte
    newTaskCard.appendChild(taskNameDiv);
    newTaskCard.appendChild(buttonsDiv);

    // Ajoutez la nouvelle carte au parent #tdlOutput
    const tdlOutput = document.querySelector("#tdlOutput");
    tdlOutput.appendChild(newTaskCard);

    // Effacez le champ de saisie après avoir ajouté la tâche
    newTaskName.value = "";
}

// Associez la fonction createNewTask à l'événement click du bouton addBtn
addBtn.addEventListener("click", createNewTask);