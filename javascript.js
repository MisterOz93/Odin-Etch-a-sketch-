
const container = document.querySelector('#container')
let div;

function makeGrid (rows, cols) {
for (i = 0; i < (rows * cols); i++) {
    let div = document.createElement('div');
    //div.innerText = i + 1; 
    container.appendChild(div).className = "cell";
}
}
makeGrid(16, 16);


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

const clear = document.querySelector('#reset')

clear.addEventListener('click', () => {
    grid.forEach(turnBlack);  
})

//Current Step: button needs to also prompt user for new sized grid w/ max of 100x100. 

// Next step: 
//Add a button to the top of the screen which will clear the current grid and send the user 
//a popup asking for how many squares per side to make the new grid. Once entered the new grid should
// be generated in the same total space as before (e.g. 960px wide) and now you’ve got a new sketch pad. 
//Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more
// computer resources being used, resulting in possible delays, freezing, 
//or crashing that we want to prevent. 
