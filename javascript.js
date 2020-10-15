//issue 1: the reset button adds a second grid, doesn't replace existing one. 
//issue 1 solved by emptying container at start of makeGrid. 

//issue 2: Grid needs to take up the same total amount of space
// issue 2 solved by getting rid of the i+1 inner text. 

//Issue 3: draw event not working on new grids. 
// issue 3 solved by nesting draw function inside makeGrid

//Issue 4: Getting the grids to darken by 10% each pass. 
// Idea: instead of randomRGB function, create CSS variable.
// Alternative idea: look up ways to grab a randomly generated number.  

let container = document.querySelector('#container')

let RGB = function randomRGB() {

let randomR = Math.floor((Math.random() * 255) + 1);
let randomG = Math.floor((Math.random() * 255) + 1);
let randomB = Math.floor((Math.random() * 255) + 1);

let randomRGB = [randomR,randomG,randomB];
return randomRGB;
}


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
    x.addEventListener('mouseenter', (e) => {


    let RGBInput = RGB ();

    x.style.background  = 'rgb('+RGBInput[0]+','+RGBInput[1]+','+RGBInput[2]+')';


  

   
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
    
    makeGrid(newGrid,newGrid);
    
    
}; 
})


         



