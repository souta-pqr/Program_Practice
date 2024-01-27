import React, { useState, useEffect } from 'react';

// テトリスの盤面のサイズを定義
const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;

// テトリミノの形状を定義
const TETROMINOS = [
  [[1]], // I
  [[1, 1], [1, 1]], // O
  [[1, 1, 0], [0, 1, 1]], // Z
  [[0, 1, 1], [1, 1]], // S
  [[1, 1, 1], [0, 1, 0]], // T
  [[1, 1], [1, 0], [1, 0]], // L
  [[1, 1], [0, 1], [0, 1]], // J
];

// 盤面を作成する関数
const createBoard = (): (null | number)[][] => {
  const board: (null | number)[][] = [];
  for (let y = 0; y < BOARD_HEIGHT; y++) {
    board[y] = [];
    for (let x = 0; x < BOARD_WIDTH; x++) {
      board[y][x] = null;
    }
  }
  return board;
};

// ランダムなテトリミノを生成する関数
const createTetromino = () => {
  const tetromino = TETROMINOS[Math.floor(Math.random() * TETROMINOS.length)];
  return { shape: tetromino, x: Math.floor(BOARD_WIDTH / 2), y: 0 };
};

// 衝突判定を行う関数
const checkCollision = (board: (null | number)[][], tetromino: { shape: number[][], x: number, y: number }) => {
  for (let y = 0; y < tetromino.shape.length; y++) {
    for (let x = 0; x < tetromino.shape[y].length; x++) {
      if (tetromino.shape[y][x] === 1 &&
          (board[tetromino.y + y] === undefined || board[tetromino.y + y][tetromino.x + x] !== null)) {
        return true;
      }
    }
  }
  return false;
};

// 盤面を表示するReactコンポーネント
const Board = () => {
  const [board, setBoard] = useState(createBoard());
  const [tetromino, setTetromino] = useState(createTetromino());
  const [nextTetromino, setNextTetromino] = useState(createTetromino());
  const [score, setScore] = useState(0);
  const [isMovingDown, setIsMovingDown] = useState(false);

// テトリミノを下に移動させる
useEffect(() => {
    const interval = setInterval(() => {
      if (!isMovingDown) {
        setTetromino(prev => {
          const next = { ...prev, y: prev.y + 1 };
          // テトリミノが他のテトリミノや盤面の壁に衝突したかどうかをチェック
          if (checkCollision(board, next)) {
            // テトリミノを盤面に固定
            const newBoard = board.map((row, y) => row.map((cell, x) => {
              if (prev.y <= y && y < prev.y + prev.shape.length &&
                  prev.x <= x && x < prev.x + prev.shape[0].length &&
                  prev.shape[y - prev.y][x - prev.x] === 1) {
                return 1;
              }
              return cell;
            }));
            // 行が満たされているかどうかをチェックし、満たされている行を消去
            let completedLines = 0;
            for (let y = 0; y < BOARD_HEIGHT; y++) {
              if (newBoard[y].every(cell => cell !== null)) {
                newBoard.splice(y, 1);
                newBoard.unshift(new Array(BOARD_WIDTH).fill(null));
                completedLines += 1;
              }
            }
            setBoard(newBoard);
            // 新しいテトリミノを生成
            const newTetromino = createTetromino();
            // 新しいテトリミノが初期位置に配置できるかどうかをチェック
            if (checkCollision(newBoard, newTetromino)) {
              clearInterval(interval);
              alert('GAME OVER');
              setBoard(createBoard()); // ボードをリセット
              setScore(0); // スコアをリセット
              return prev;
            }
            setTetromino(nextTetromino);
            setNextTetromino(newTetromino);
            // スコアを更新
            setScore(prev => {
              const newScore = prev + completedLines * 100;
              if (newScore >= 1000) {
                clearInterval(interval);
                const continueGame = window.confirm('GAME CLEAR! Would you like to continue?');
                if (continueGame) {
                  return newScore;
                } else {
                  setBoard(createBoard()); // ボードをリセット
                  setTetromino(createTetromino()); // テトリミノをリセット
                  return 0; // スコアをリセット
                }
              }
              return newScore;
            });
            return prev;
          }
          // テトリミノを下に移動
          return next;
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [board, nextTetromino, isMovingDown]);    

  // キーボードの矢印キーによるテトリミノの操作を処理する
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        setTetromino(prev => {
          const next = { ...prev, x: prev.x - 1 };
          if (!checkCollision(board, next)) {
            return next;
          }
          return prev;
        });
      } else if (event.key === 'ArrowRight') {
        setTetromino(prev => {
          const next = { ...prev, x: prev.x + 1 };
          if (!checkCollision(board, next)) {
            return next;
          }
          return prev;
        });
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        setIsMovingDown(true);
        setTetromino(prev => {
          const next = { ...prev, y: prev.y + 1 };
          if (!checkCollision(board, next)) {
            return next;
          }
          return prev;
        });
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        setTetromino(prev => {
          const next = { ...prev, shape: prev.shape[0].map((val, i) => prev.shape.map(row => row[i])).reverse() };
          if (!checkCollision(board, next)) {
            return next;
          }
          return prev;
        });
      }
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === 'ArrowDown') {
        setIsMovingDown(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [board]);

// テトリミノを盤面に描画する
const boardWithTetromino = board.map((row, y) => row.map((cell, x) => {
    if (tetromino.y <= y && y < tetromino.y + tetromino.shape.length &&
        tetromino.x <= x && x < tetromino.x + tetromino.shape[0].length &&
        tetromino.shape[y - tetromino.y][x - tetromino.x] === 1) {
      return 1;
    }
    return cell;
  }));
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '20px' }}>SCORE: {score}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '220px' }}>
          <div>
            {boardWithTetromino.map((row, y) => (
              <div key={y} style={{ display: 'flex' }}>
                {row.map((cell, x) => <div key={x} style={{ width: '20px', height: '20px', border: '1px solid black', textAlign: 'center', backgroundColor: cell === 1 ? 'blue' : 'white' }}>{cell}</div>)}
              </div>
            ))}
          </div>
          <div style={{ marginLeft: '20px' }}>
            <div>NEXT</div>
            {nextTetromino.shape.map((row, y) => (
              <div key={y} style={{ display: 'flex' }}>
                {row.map((cell, x) => <div key={x} style={{ width: '20px', height: '20px', border: '1px solid black', textAlign: 'center', backgroundColor: cell === 1 ? 'blue' : 'white' }}>{cell}</div>)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );      
}

export default Board;