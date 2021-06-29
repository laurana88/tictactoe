import React, { useState } from 'react';
import Board from './components/Board';
import './index.css';

const Game = () => {

  const [xisnext, setXisnext] = useState(true);
  const [history, setHistory] = useState([{squares: Array(9).fill(null), index: 0}]);
  const [stepNumber, setStepNumber] = useState(0);

  const newHistory = history.slice(0, stepNumber + 1);
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);
  const locationArray = [[1,1],[2,1],[3,1],[1,2],[2,2],[3,2],[1,3],[2,3],[3,3]];

  const handleClick = (i) => {

    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    
    squares[i] = xisnext ? 'X' : 'O';  
    setXisnext(!xisnext);
    setStepNumber(newHistory.length);
    setHistory(newHistory.concat([{squares: squares, index: i}]));
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisnext((step % 2) === 0);
  }

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xisnext ? 'X' : 'O');
  }

  const moves = history.map((object, move) => {
    const locationIndex = object.index;
    const column = locationArray[locationIndex][0];
    const row = locationArray[locationIndex][1];
    const desc = move ?
      `Go to move #${move} (${column}, ${row})` :
      `Go to game start`;
    return (
      <li key={move}>
        <button 
          onClick={() => jumpTo(move)}
          className={move === stepNumber ? 'selected-move' : 'not-selected'}
        >
          {desc}
        </button>
      </li>
    );
  });

  // console.log('history', history);
  // console.log('new history', newHistory);

  return (
    <div className="game">
    <h1>Tic Tac Toe</h1>
      <div className="game-details">
        <Board 
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        />
        <div className="game-info">
          <div><h2>{status}</h2></div>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}

// ========================================

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}

export default Game;