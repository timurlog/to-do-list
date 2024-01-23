import { createNewTask } from "./create-new-task.js";
// import { filters } from "./filters.js";

let addBtn = document.querySelector('#tdlInputAdd');
let newTaskName = document.querySelector('#tdlNewInput');
let filtersBtn = document.querySelectorAll('.tdl-filters-btn');

filtersBtn.forEach(filterButton => {
    filterButton.addEventListener('click', () => {
        let menuFilterItems = document.querySelectorAll('.tdl-filters-btn');
        let menuCards = document.querySelectorAll('.output-card');
    
        menuFilterItems.forEach(function (item) {
    
            item.addEventListener('click', function () {
    
                menuFilterItems.forEach(function (filterItem) {
    
                    filterItem.classList.remove('active');
    
                });
    
                this.classList.add('active');
                let filterValue = this.getAttribute('data-filter');
    
                menuCards.forEach(function (card) {
    
                    card.style.display = 'none';
    
                    if (filterValue === '*' || card.classList.contains(filterValue.slice(1))) {
    
                        card.style.display = 'flex';
    
                    }
                });
            });
        });
    })
});

addBtn.addEventListener("click", createNewTask);
newTaskName.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      createNewTask();
    }
});