// grab all squares

const squares = document.querySelectorAll(".square");
// console.log(squares);

// const square0 = squares[0];
// const square1 = squares[1];
// const square2 = squares[2];
// const square3 = squares[3];
// const square4 = squares[4];
// const square5 = squares[5];
// const square6 = squares[6];
// const square7 = squares[7];
// const square8 = squares[8];

// just in case but i don't wanna

const rows = document.querySelectorAll(".row")

// const row0 = rows[0];
// const row1 = rows[1];
// const row2 = rows[2];


// arrays of stuff per row
// const rowZeroSquares = row0.querySelectorAll(".square");
// const rowOneSquares = row1.querySelectorAll(".square");
// const rowTwoSquares = row2.querySelectorAll(".square");

// nvm rows[i] will work better for me tbh

// let playerX = true;
// let playerO = false;

class player {
    name;
    isTurn;
    intWins;
    constructor(nam, defTurn) {
        this.name = nam;
        this.isTurn = defTurn;
        this.intWins = 0;
    }
}

const playerX = new player('X', true);
const playerO = new player('O', false);

function clearBoard() {
    for (let i = 0; i < squares.length; i++) {
        // const element = array[i];
        squares[i].innerHTML='';
        
    }
}

function checkIfWon() {
    for (const row of rows) {
        const squareRow = row.querySelectorAll(".square");
        if (squareRow[0].innerHTML === squareRow[1].innerHTML && squareRow[1].innerHTML === squareRow[2].innerHTML && squareRow[0].innerHTML !== '') {
            console.log("win")
            setTimeout(clearBoard,2000);
            return true;
        };
    }
    for (let i = 0; i < 3; i++) {
        // const element = array[i];
        if (squares[i].innerHTML === squares[i+3].innerHTML &&squares[i+3].innerHTML === squares[i+6].innerHTML && squares[i+3].innerHTML !== '') {
            console.log("win")
            setTimeout(clearBoard,2000);
            return true;
        };
    }
    if (squares[0].innerHTML === squares[4].innerHTML &&squares[4].innerHTML === squares[8].innerHTML && squares[4].innerHTML !== '') {
        console.log("win")
        setTimeout(clearBoard,2000);
        return true;
    } else if (squares[2].innerHTML === squares[4].innerHTML &&squares[4].innerHTML === squares[6].innerHTML && squares[4].innerHTML !== '') {
        console.log("win")
        setTimeout(clearBoard,2000);
        return true;
    };

}

function allowMove(square) {
    // console.log("click");
    // console.log(playerX);
    // console.log(playerO);
    if (playerX.isTurn && square.innerHTML === '') {
        square.innerHTML = "X";
        playerX.isTurn = !playerX.isTurn;
        playerO.isTurn = !playerO.isTurn;
        // console.log(playerX);
        // console.log(playerO);
        return true;
    }
    else if (playerO.isTurn && square.innerHTML === '') {
        square.innerHTML = "O";
        playerX.isTurn = !playerX.isTurn;
        playerO.isTurn = !playerO.isTurn;
        // console.log(playerX);
        // console.log(playerO);
        return true;
    }
    // console.log(playerX);
    // console.log(playerO);
}

for (let i = 0; i < squares.length; i++) {
    const square = squares[i];
    square.addEventListener("click", () => {
        if(allowMove(square)){
            checkIfWon();
        };
    });
    
}