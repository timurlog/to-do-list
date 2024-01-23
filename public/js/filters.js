let menuCards;

export function filters() {
    let menuFilterItems = document.querySelectorAll('.tdl-filters-btn');
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
}