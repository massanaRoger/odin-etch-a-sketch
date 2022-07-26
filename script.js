const COLUMNS = 16;
const ROWS = 16;
const container = document.querySelector('.container');

for (let i = 0; i < COLUMNS * ROWS; i++) {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    container.appendChild(cell);
}