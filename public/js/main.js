import { createNewTask } from "./create-new-task.js";

let addBtn = document.querySelector('#tdlInputAdd');
let newTaskName = document.querySelector('#tdlNewInput');
export let menuCards;

export let menuFilterItems = document.querySelectorAll('.tdl-filters-btn');
menuCards = document.querySelectorAll('.output-card');

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

addBtn.addEventListener("click", () => {
    createNewTask();
    menuCards = document.querySelectorAll('.output-card');
    menuCards.forEach(menuCard => {
        menuCard.style.display = 'flex'
    });
    menuFilterItems.forEach(filterItem => {
        filterItem.classList.remove('active');
    });
    menuFilterItems[0].classList.add('active');
});

newTaskName.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        createNewTask();
        menuCards = document.querySelectorAll('.output-card');
        menuCards.forEach(menuCard => {
            menuCard.style.display = 'flex'
        });
        menuFilterItems.forEach(filterItem => {
            filterItem.classList.remove('active');
        });
        menuFilterItems[0].classList.add('active');
    }
});