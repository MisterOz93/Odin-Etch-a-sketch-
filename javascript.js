//issue 1: the reset button adds a second grid, doesn't replace existing one. 
//issue 1 solved by emptying container at start of makeGrid. 

//issue 2: Grid needs to take up the same total amount of space
// issue 2 solved by getting rid of the i+1 inner text. 

//Issue 3: draw event not working on new grids. 
// issue 3 solved by nesting draw function inside makeGrid

let container = document.querySelector('#container')



let defaultGrid = 16;

let makeGrid = function (rows, cols) {
    container.innerHTML = '';
    for (i = 0; i < (rows * cols); i++) {
        document.documentElement.style.setProperty("--rowNum", rows);
        document.documentElement.style.setProperty("--colNum", cols);
        div = document.createElement('div');
        //div.innerText = i + 1;  //temporary 
        container.appendChild(div).className = "cell";
    }
    const grid = document.querySelectorAll('.cell');
    grid.forEach(draw);
    function draw (x) {
    x.addEventListener('mouseenter', () => {
        x.style.background = 'yellow';
    })
}
    }

    makeGrid(defaultGrid, defaultGrid);
    const resetButton = document.querySelector('#resetButton')

resetButton.addEventListener('click', (e) => {

    let newGrid = prompt('How Many Squares Would You Like Per Row and Column? (max 100)')
    if (isNaN(newGrid)) {alert('Error, Please enter a number')
}  else if (newGrid > 100 || newGrid < 1) {alert('Please Select A number between 1 and 100')
}  else { 
    
    // idea: nest startup makeGrid on conditional if resetButton hasn't been clicked. try if event.target =
    //Step two: create a new grid using newGrid as parameters
    makeGrid(newGrid,newGrid);
    
    
}; 
})//event end 


         



