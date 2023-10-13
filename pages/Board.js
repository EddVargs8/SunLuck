import React, { useState, useEffect } from 'react';
import index from './index';

function Board() {
  const rows = 3;
  const cols = 3;
  const totalBombs = 2;

  const [board, setBoard] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    initializeBoard();
  }, []);

  const initializeBoard = () => {
    
    // Crear un tablero vacío
  const newBoard = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push({
        row: i,
        col: j,
        isBomb: false,
        isCoin: false,
        isOpen: false,
      });
    }
    newBoard.push(row);
    }
  
    

    // Colocar bombas en el tablero de manera aleatoria
    let bombsPlaced = 0;
    while (bombsPlaced < totalBombs) {
      const randomRow = Math.floor(Math.random() * rows);
      const randomCol = Math.floor(Math.random() * cols);
      if (!newBoard[randomRow][randomCol].isBomb) {
        newBoard[randomRow][randomCol].isBomb = true;
        bombsPlaced++;
      }
    }

    // Colocar monedas en el tablero de manera aleatoria
    let coinsPlaced = 0;
    while (coinsPlaced < (rows * cols - totalBombs)) {
      const randomRow = Math.floor(Math.random() * rows);
      const randomCol = Math.floor(Math.random() * cols);
      if (!newBoard[randomRow][randomCol].isBomb && !newBoard[randomRow][randomCol].isCoin) {
        newBoard[randomRow][randomCol].isCoin = true;
        coinsPlaced++;
      }
    }

    setBoard(newBoard);
  };

  const cellStyle = {
    width: '50px',
    height: '50px',
    border: '1px solid #333',
    backgroundColor: '#ddd',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    cursor: 'pointer',
  };

  const openCellStyle = {
    backgroundColor: '#fff',
  };

  const handleCellClick = (row, col) => {
    if (board[row][col].isOpen || gameOver) {
      return;
    }
    
    const updatedBoard = [...board];
    const cell = updatedBoard[row][col];
    
    if (cell.isBomb) {
      setGameOver(true);

    } else {
      cell.isOpen = true;
      setBoard(updatedBoard);
    }
  };

  function navigateToDemo() {
    // Cambia la URL a la página principal (por lo general, la raíz de tu sitio)
    window.location.href = '/';
  }
   

  return ( 
    <div>
      <div className="board ">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell) => (
            <div
              key={`${cell.row}-${cell.col}`}
              style={{
                ...cellStyle,
                ...(cell.isOpen ? openCellStyle : {}),
              }}
              onClick={() => handleCellClick(cell.row, cell.col)}
            >
              {cell.isOpen && cell.isBomb ? '💣' : cell.isOpen && cell.isCoin ? '💰' : ''}
            </div>
          ))}
        </div>
      ))}
      {gameOver && <p>¡Has perdido! El juego ha terminado.</p>}
      <div className="flex flex-col place-items-center justify-center">
                            <button
                                type="submit"
                                className="inline-flex h-8 w-52 justify-center bg-purple-500 font-bold text-white"
                                onClick={() => {
                                    navigateToDemo();
                                }}
                            >
                                Regresa a inicio 🤓
                            </button>
      </div>
    </div>
    </div>
    
    
    

  );
}

export default Board;
