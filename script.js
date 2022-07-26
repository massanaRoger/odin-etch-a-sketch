const COLUMNS = 16;
const ROWS = 16;
const container = document.querySelector('.container');

for (let i = 0; i < COLUMNS * ROWS; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
}

const cells = document.querySelectorAll('.cell');
cells.forEach(addTransition);

function addTransition(cell) {
    cell.addEventListener('mouseover', function () {
        this.classList.add('cell-hover');
    });
}