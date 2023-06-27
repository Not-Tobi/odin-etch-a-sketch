let mouse;
let colour = 'black';
let gridSize = 500;
let userInput = 16;
let squareSize = gridSize / userInput ;
let squareTotal = userInput  * userInput;

// Each individual squares
for (let i = 0; i < squareTotal; i++) {  
    let grid = document.querySelector(".grid");
    let square = document.createElement('div');
    square.classList.add('square')
    grid.appendChild(square);

    square.setAttribute('style', `height: ${squareSize}px;`, `width: ${squareSize}px;`)
    
    // Using your mouse to change colours
    square.addEventListener('click', () => {
        square.style.backgroundColor = colour;
    })

    square.addEventListener('mousedown', () => {
        mouse = true;
    })

    square.addEventListener('mousemove', () => {
        if (mouse) {
        square.style.backgroundColor = colour;
        }
    })

    square.addEventListener('mouseup', () => {
        mouse = false;
    })
}

// Easer
let easer = document.querySelector(".easer");
easer.addEventListener('click',() => {
    colour = 'white'
})

// Normal
let normal = document.querySelector(".normal");
normal.addEventListener('click',() => {
    colour = 'black'
})

// Reset
let reset = document.querySelector(".reset");
let square = document.querySelector(".square");
reset.addEventListener('click',() => {
    square.style.backgroundColor = 'white';
})