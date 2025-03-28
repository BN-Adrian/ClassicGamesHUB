function startTicTacToe() {
    const gameArea = document.getElementById("gameArea");

    if (!gameArea) {
        console.log("Eroare: Elementul 'gameArea' nu a fost găsit!");
        return;
    }

    gameArea.innerHTML = '';  

    const board = document.createElement('div');
    board.classList.add('tic-tac-toe-board');


    for (let i = 0; i < 9; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("data-index", i);
        board.appendChild(cell);  
    }

    gameArea.appendChild(board);  
    initTicTacToeGame();
}

function initTicTacToeGame() {
    const cells = document.querySelectorAll(".cell");
    const winnerMessage = document.getElementById("winnerMessage");
    const resetBtn = document.getElementById("resetBtn");

    let currentPlayer = "X";
    let board = ["", "", "", "", "", "", "", "", ""];
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    cells.forEach(cell => {
        cell.addEventListener("click", function() {
            handleCellClick(cell, board, currentPlayer, winPatterns, winnerMessage);
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        });
    });

    resetBtn.addEventListener("click", function() {
        resetGame(cells, board, winnerMessage);
        currentPlayer = "X";
    });
}

function handleCellClick(cell, board, currentPlayer, winPatterns, winnerMessage) {
    const index = cell.getAttribute("data-index");

    if (!board[index]) {
        board[index] = currentPlayer;
        cell.textContent = currentPlayer;

        if (checkWinner(board, winPatterns, winnerMessage)) return;
    }
}

function checkWinner(board, winPatterns, winnerMessage) {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[b] === board[c]) {
            winnerMessage.textContent = `Jucătorul ${board[a]} a câștigat!`;
            return true;
        }
    }

    if (!board.includes("")) {
        winnerMessage.textContent = "Egalitate!";
        return true;
    }
    return false;
}

function resetGame(cells, board, winnerMessage) {
    board.fill("");
    cells.forEach(cell => {
        cell.textContent = "";
        cell.style.color = "black";
    });
    winnerMessage.textContent = "";
}
