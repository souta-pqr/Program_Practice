let board = Array(3).fill(null).map(() => Array(3).fill(null));
let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');
const resetButton = document.querySelector('#reset-button');
const winnerAnnouncement = document.querySelector('#winner-announcement');

cells.forEach((cell, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    cell.addEventListener('click', () => {
        if (board[row][col] || checkWinner(board)) {
            return;
        }
        board[row][col] = currentPlayer;
        cell.textContent = currentPlayer;

        // 勝者をチェック
        if (checkWinner(board)) {
            setTimeout(() => {
                winnerAnnouncement.textContent = currentPlayer + 'の勝利！';
            }, 0);
            return;
        }

        // 次のプレーヤーに交代
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    });
});

resetButton.addEventListener('click', () => {
    board = Array(3).fill(null).map(() => Array(3).fill(null));
    currentPlayer = 'X';
    cells.forEach(cell => cell.textContent = '');
    winnerAnnouncement.textContent = '';
});

function checkWinner(board) {
    // 行をチェック
    for (let i = 0; i < 3; i++) {
        if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
            alert(board[i][0] + 'の勝利！');
            return board[i][0];
        }
    }

    // 列をチェック
    for (let i = 0; i < 3; i++) {
        if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
            alert(board[0][i] + 'の勝利！');
            return board[0][i];
        }
    }

    // 対角線をチェック
    if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
        alert(board[0][0] + 'の勝利！');
        return board[0][0];
    }
    if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        alert(board[0][2] + 'の勝利！');
        return board[0][2];
    }

    // 勝者がいない場合はnullを返す
    return null;
}
