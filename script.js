const container = document.querySelector('.container');

document.querySelector('.chose-size').addEventListener('click', promptMessage);

function addTransition(cell) {
    cell.addEventListener('mouseover', function () {
        this.style.background = randomRgb();
    });
}

function promptMessage() {
    document.querySelectorAll('.cell').forEach(cell => {
        cell.remove();
    });
    let n = prompt('Enter the number of rows and columns');
    if (n > 0 && n <= 100) {
        createGrid(n);
    } else {
        promptMessage();
    }
}

function createGrid(n) {
    for (let i = 0; i < n * n; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
    container.setAttribute('style', `grid-template-columns: repeat(${n}, 1fr);`);

    const cells = document.querySelectorAll('.cell');
    cells.forEach(addTransition);
}

function randomRgb() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}