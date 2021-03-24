import React from 'react';
import './Arrows.css';
import useMovement from "../../useMovement";

const Arrows = () => {
  const {move} = useMovement();

  return (
    <div className="arrows">
      <button
        className="arrows__arrow"
        onClick={() => move('up')}>
        Up
      </button>
      <button
        className="arrows__arrow"
        onClick={() => move('left')}>
        Left
      </button>
      <button
        className="arrows__arrow"
        onClick={() => move('down')}>
        Down
      </button>
      <button
        className="arrows__arrow"
        onClick={() => move('right')}>
        Right
      </button>
    </div>
  );
};

export default Arrows;
