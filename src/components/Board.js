import React from 'react';
import Square from './Square'

const Board = (props) => {

    const renderSquare = (i) => {
      return <Square 
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
          key={i} 
      />;
    }

    const createBoard = (total) => {
      let board = [];
      for (let i = 0; i < total; i++) {
        console.log(board);
        board.push(renderSquare(i));
      }
      return board;
    }
  
    return (
      <div className="game-board">
        {createBoard(9)}
      </div>
    );
  }

  export default Board;