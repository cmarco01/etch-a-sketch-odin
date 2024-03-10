
const mainContainer = document.querySelector("#main-container");

const btn = document.createElement("button");
mainContainer.appendChild(btn);
btn.textContent = "Change Size";
btn.onclick = getNumSquares;

function getNumSquares() {
    let numSquares = parseInt(prompt("Enter num of squares (max 100): "));
    // console.log(numSquares);
    // console.log(isNaN(numSquares));

    while (isNaN(numSquares) || numSquares < 1) {
        numSquares = parseInt(prompt("Invalid input. Numbers only from 1 to 100. Enter num of squares (max 100): "));
    }
    
    if (numSquares > 100) {
        numSquares = 100;
    }

    clearBoard();
    createBoard(numSquares);
}

function clearBoard() {
    const board = document.querySelectorAll("#main-container div");
    board.forEach((square) => {
        square.remove();
    });
}

function createBoard(numSquares) {
    // for-loop to create number of rows
    // for-loop within each row to create number of squares
    // add class = item to each div (using class=item to change color on mouse hover)

    for (let i=0; i < numSquares; i++) {
        const newRow = document.createElement("div");
        newRow.className = "row";
        mainContainer.appendChild(newRow);

        for (let k=0; k < numSquares; k++) {
            const newSquare = document.createElement("div");
            newSquare.className = "no-highlight";
            newSquare.addEventListener("mouseover", function(e) {changeColor(e)});
            newRow.appendChild(newSquare);
        }
    }
}

function changeColor (event) {
    // just found this method for a random color on google haha
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    event.target.style.backgroundColor = "#" + randomColor;

    // un-comment if i want to be a solid color swap between the two colors
    //   defined by classes highlight and no-highlight on CSS
    // event.target.className = "highlight";

    // un-comment if i want it to be so on hover, it changes from white to pink
    //   (color defined by classes highlight and no-highlight), or pink to white
    /*
    if (event.target.className == "no-highlight") {
        event.target.className = "highlight";
    } else if (event.target.className == "highlight") {
        event.target.className = "no-highlight";
    }
    */
}


createBoard(16);