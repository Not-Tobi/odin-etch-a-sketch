let mouse;
let random;
let colour = 'black';
let gridSize = 500;
let userInput = 16;
let squareSize;
let squareTotal;
interactive();

// Each individual squares
function interactive() {  
    function calculate () {
        squareSize = gridSize / userInput ;
        squareTotal = userInput  * userInput;
        return;
    }
    calculate();
    
    for (let i = 0; i < squareTotal; i++) {  
        let grid = document.querySelector(".grid");
        let square = document.createElement('div');
        square.classList.add('square')
        grid.appendChild(square);

        square.setAttribute('style', `height: ${squareSize}px;`, `width: ${squareSize}px;`)
        
        // Using your mouse to change colours
        square.addEventListener('click', () => {
            if (random) {
                randomColour();
                square.style.backgroundColor = colour;
            }
            else {
                square.style.backgroundColor = colour;
            }
        })

        square.addEventListener('mousedown', () => {
            mouse = true;
        })

        square.addEventListener('mousemove', () => {
            if (random && mouse) {
                randomColour();
                square.style.backgroundColor = colour;
            }
            else if (mouse) {
                square.style.backgroundColor = colour;
            }
        })

        square.addEventListener('mouseup', () => {
            mouse = false;
        })
    }
}
// Normal
let normal = document.querySelector(".normal");
normal.addEventListener('click',() => {
    colour = 'black';
})

// Easer
let easer = document.querySelector(".easer");
easer.addEventListener('click',() => {
    colour = 'white';
    random = false;
})

// Rainbow
let rainbow = document.querySelector(".rainbow");
rainbow.addEventListener('click',() => {
    return random = true;
})

function randomColour() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return colour = `rgb(${r}, ${g}, ${b})`
}

// Reset
let reset = document.querySelector(".reset");
let squares = document.querySelectorAll(".square");
reset.addEventListener('click',() => {
    squares.forEach((squares) => {
            squares.style.backgroundColor = 'white';
    })
    random = false;
    colour = 'black';
})

// Grid size using a slider 
// const sliderValue = document.querySelector("#value");
// const input = document.querySelector("#slider");
// sliderValue.textContent = input.value;
// input.addEventListener("input", (event) => {
//     interactive(userInput = Number(event.target.value));
//     sliderValue.textContent = event.target.value;
// });
