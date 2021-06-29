import React from 'react';
import Square from './Square'

const Board = (props) => {

    const createBoard = (total) => {
      let board = [];
      for (let i = 0; i < total; i++) {
        board.push(renderSquare(i));
      }
      return board;
    }

    const squareClass = (i) => {
      if (props.winningline && props.winningline.line.includes(i)) {
        return 'highlight ';  
      }
      return '';
    }

    const ifDraw = () => {
      if (props.status.includes('DRAW')) {
        return 'draw ';
      }
      return '';
    }

    const renderSquare = (i) => {
      // const squareClass = "square";

      return <Square 
        value={props.squares[i]}
        onClick={() => props.onClick(i)}
        key={i}
        line={props.winningline}
        class={squareClass(i) + 'square ' + ifDraw()}
      />;
    }
  
    return (
      <div className="game-board">
        {createBoard(9)}
      </div>
    );
  }

  export default Board;