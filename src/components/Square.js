import React from 'react';

const Square = (props) => {
    return (
      <button 
        className= {props.class}
        onClick={props.onClick}
        >
        {props.value}
      </button>
    );
  }

  export default Square;