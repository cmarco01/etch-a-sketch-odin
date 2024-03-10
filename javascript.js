/*
so wanna make 1 div w/ class = row. this initializes a row.
the number initialized will be dependent on how many sqaures the user wants
 (but at the start, we're defaulting to 16).

 within each row, using a for loop, create new divs w/ class = item. number
 created, again, dependent on how many user chooses (default 16).
*/

const mainContainer = document.querySelector("#main-container");

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
            newSquare.className = "item";
            newRow.appendChild(newSquare);
        }

    }
}


createBoard(16);