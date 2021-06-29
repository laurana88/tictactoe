import React, { useState } from 'react';
import Board from './components/Board';
import './index.css';

const Game = () => {

  // States & Variables
  const [xisnext, setXisnext] = useState(true);
  const [history, setHistory] = useState([{squares: Array(9).fill(null), index: 0}]);
  const [stepNumber, setStepNumber] = useState(0);
  const [toggle, setToggle] = useState(false);

  const newHistory = history.slice(0, stepNumber + 1);
  const current = history[stepNumber];
  const winnerObject = calculateWinner(current.squares);
  const locationArray = [[1,1],[2,1],[3,1],[1,2],[2,2],[3,2],[1,3],[2,3],[3,3]];

  // Function handling what happens when a square is clicked
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

  // Controls the current status above the list of moves
  let status;
  if (winnerObject) {
    status = 'Winner: ' + winnerObject.winner;
  } else if (!current.squares.includes(null)) {
    status = 'DRAW: No Winner :('
  } else {
    status = 'Next player: ' + (xisnext ? 'X' : 'O');
  }

  // Controls the list of moves & clicking them
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

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisnext((step % 2) === 0);
  }

  // Controls the toggle and order of the list
  const handleToggle = () => {
    setToggle(!toggle);
  }

  const setOrder = (arr) => {
    if (toggle) {
      arr.reverse();
    }
    return arr;
  }

  // DISPLAYED
  return (
    <div className="game">
    <h1>Tic Tac Toe</h1>
      <div className="game-details">
        <Board 
          squares={current.squares}
          onClick={(i) => handleClick(i)}
          winningline={winnerObject}
          status={status}
        />
        <div className="game-info">
          <div><h2>{status}</h2></div>
          <div className="toggle">
            <label className="switch">
              <input 
                type="checkbox"
                onChange={() => handleToggle()}
              />
              <span className="slider"></span>
            </label>
            <p>Toggle Ascending | Descending</p>
          </div>
          <ol>{setOrder(moves)}</ol>
        </div>
      </div>
    </div>
  );
}

// ========================================
// Calculating the winner
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
        return {
          winner: squares[a],
          line: lines[i],
        }
      }
    }
    return null;
}

export default Game;