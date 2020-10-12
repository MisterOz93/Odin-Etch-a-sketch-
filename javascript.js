//current issue: the reset button adds a second grid, doesn't replace existing one.
//Current issue 2: Grid needs to take up the same total amount of space, need to adjust css for that i think.

let container = document.querySelector('#container')


let div;
let start = window.onload = makeGrid(16,16);
function makeGrid (rows, cols) {
    for (i = 0; i < (rows * cols); i++) {
        document.documentElement.style.setProperty("--rowNum", rows);
        document.documentElement.style.setProperty("--colNum", cols);
        div = document.createElement('div');
        div.innerText = i + 1; 
        container.appendChild(div).className = "cell";
    }
    }
    const resetButton = document.querySelector('#resetButton')

resetButton.addEventListener('click', () => {
    start = '';
    grid.forEach(turnBlack); 
    let newGrid = prompt('How Many Squares Would You Like Per Row and Column? (ex: 16 creates a 16x16 grid)')
    if (isNaN(newGrid)) {alert('Error, Please enter a number')
}  else if (newGrid > 100 || newGrid < 1) {alert('Please Select A number between 1 and 100')
}  else { 
makeGrid(newGrid);
        document.documentElement.style.setProperty("--rowNum", newGrid);
        document.documentElement.style.setProperty("--colNum", newGrid);
}
}); 


    
const grid = document.querySelectorAll('.cell');



function draw (x) {
    x.addEventListener('mouseenter', () => {
        x.style.background = 'blue';
    })
}

function turnBlack (x) {
    x.style.background ='black';
}

grid.forEach(draw);



