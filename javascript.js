// create a grid of 16x16 square divs. Then nest them all in the existing div in html file. 
// dust off css memory, use that to create columns and rows, then make function/loop for 16x16. 
const container = document.querySelector('#container')
const div = document.createElement('div');
div.style.width = "50px";
div.style.height = '50px';
div.style.background = 'red';

container.appendChild(div);


