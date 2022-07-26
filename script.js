const container = document.querySelector('.container');

document.querySelector('.chose-size').addEventListener('click', promptMessage);



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
    let arr = new Array(n * n);
    for (let i = 0; i < n * n; i++) {
        let cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
        arr[i] = 1;
    }
    container.setAttribute('style', `grid-template-columns: repeat(${n}, 1fr);`);

    const cells = document.querySelectorAll('.cell');
    for (let i = 0; i < cells.length; i++) {
        addTransition(cells[i], i);
    }

    function addTransition(cell, i) {
        cell.addEventListener('mouseover', function () {
            this.style.background = randomRgb();
            arr[i] > 0 ? arr[i] -= 0.1 : arr[i] = 0;
            this.style.filter = `brightness(${arr[i]})`;
        });
    }
}

function randomRgb() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}