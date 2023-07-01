let random;
let colour = '#475F94';
let gridSize = 500;
let userInput = 16;
let grid = document.querySelector(".grid");
let btn = document.querySelectorAll(".btn");
interactive();

// Grid size using a slider 
const sliderValue = document.querySelector("#value");
const input = document.querySelector("#slider");
sliderValue.textContent = input.value  + ' x ' + input.value;

input.addEventListener("input", () => {
    userInput = input.value
    removeExistingGrid();
    interactive();
    sliderValue.textContent = input.value + ' x ' + input.value;
});

// Remove existing grid
function removeExistingGrid () {
    let oldGrid = document.querySelectorAll('.square');
    for (let i = 0; i < oldGrid.length; i++) {
        grid.removeChild(oldGrid[i]);
    }
}

// Add each individual squares
function interactive() {  
    let squareSize = gridSize / userInput;
    let squareTotal = userInput * userInput;
    let mouse;
    
    // Making the grid
    for (let i = 0; i < squareTotal; i++) {    
        let square = document.createElement('div');
        square.classList.add('square')
        grid.appendChild(square);

        square.setAttribute('style', `height: ${squareSize}px;`, `width: ${squareSize}px;`)
        
        // Using your mouse to change colours
        square.addEventListener('mousedown', () => {
            mouse = true;
            if (random) {
                randomColour();
                square.style.backgroundColor = colour;
            }
            else {
                square.style.backgroundColor = colour;
            }
        })

        square.addEventListener('mouseover', () => {
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

// Remove Active Class
function removeActiveClass() {
    btn.forEach(btn => {
        btn.classList.remove('active');
        random = false;
    })
}

// User Colours
let userColour = document.querySelector("#userColour");
let userColourBorder = document.querySelector(".userColourBorder");
userColour.addEventListener('input',() => {
    userColourBorder.style.backgroundColor = userColour.value;
    colour = userColour.value;
})

userColourBorder.addEventListener('click',() => {
    if (userColourBorder.classList.contains('active')) {
        userColourBorder.classList.remove('active');
    }
    else {
        removeActiveClass();
        userColourBorder.classList.add('active');
        colour = userColour.value;
    }
})

// Eraser
let eraser = document.querySelector(".eraser");
eraser.addEventListener('click',() => {
    if (eraser.classList.contains('active')) {
        colour = userColour.value;
        eraser.classList.remove('active');
    }
    else {
        removeActiveClass();
        eraser.classList.add('active');
        colour = 'white';
    }
})

// Rainbow
let rainbow = document.querySelector(".rainbow");
rainbow.addEventListener('click',() => {
    if (rainbow.classList.contains('active')) {
        removeActiveClass();
        colour = userColour.value;
    }
    else {
        removeActiveClass();
        rainbow.classList.add('active');
        return random = true;
    }
})

function randomColour() {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    return colour = `rgb(${r}, ${g}, ${b})`
}

// Clear the grid
let clear = document.querySelector(".clear");
clear.addEventListener('click',() => {
    let square = document.querySelectorAll(".square");
    square.forEach((square) => {
        square.style.backgroundColor = 'white';
    })
})