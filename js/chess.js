function startChess() {
    const chessArea = document.getElementById("chessArea");
    if (!chessArea) {
        console.error("Elementul 'chessArea' nu a fost găsit!");
        return;
    }

    chessArea.innerHTML = "";

    const board = document.createElement("div");
    board.classList.add("chess-board");

    const initialBoard = [
        ["black_rook", "black_knight", "black_bishop", "black_queen", "black_king", "black_bishop", "black_knight", "black_rook"],
        ["black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn", "black_pawn"],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["", "", "", "", "", "", "", ""],
        ["white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn", "white_pawn"],
        ["white_rook", "white_knight", "white_bishop", "white_queen", "white_king", "white_bishop", "white_knight", "white_rook"]
    ];

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const cell = document.createElement("div");
            cell.classList.add("chess-cell");
            const isBlack = (row + col) % 2 === 1;
            cell.style.backgroundColor = isBlack ? "#769656" : "#eeeed2";

            const piece = initialBoard[row][col];
            if (piece) {
                const img = document.createElement("img");
                img.src = `image/${piece}.png`;
                img.alt = piece;
                img.style.width = "48px";
                img.style.height = "48px";
                cell.appendChild(img);
            }

            board.appendChild(cell);
        }
    }

    chessArea.appendChild(board);

    const resetBtn = document.getElementById("resetChessBtn");
    resetBtn.onclick = startChess;
}
