// create a grid of 16x16 square divs. Then nest them all in the existing div in html file. 
// dust off css memory, use that to create columns and rows, then make function/loop for 16x16. 
const container = document.querySelector('#container')


function makeGrid (rows, cols) {
for (i = 0; i < (rows * cols); i++) {
    let div = document.createElement('div');
    //div.innerText = i + 1; 
    container.appendChild(div).className = "cell";
}
}
makeGrid(16, 16);
