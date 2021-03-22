import React from 'react';
import './App.css';
import useMovement from "./useMovement";
import Arrows from "./components/Arrows/Arrows";
import Images from "./components/Images/Images";

const App = () => {
  const canvasRef = React.useRef(null);
  const linkDownRef = React.useRef(null);
  const linkRightRef = React.useRef(null);
  const linkUpRef = React.useRef(null);
  const linkLeftRef = React.useRef(null);
  const {x, y, direction, move} = useMovement();

  // без ререндера окно канваса
  React.useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;
  }, []);


  React.useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    context.clearRect(0, 0, window.innerHeight, window.innerWidth);
    // context.fillRect(x, y, 100, 100);
    let theLinkRef;
    if (direction === 'down') theLinkRef = linkDownRef;
    if (direction === 'up') theLinkRef = linkUpRef;
    if (direction === 'left') theLinkRef = linkLeftRef;
    if (direction === 'right') theLinkRef = linkRightRef;

    context.drawImage(theLinkRef.current, x, y);
  }, [x, y]);

  return (
    <div className="app">
      <canvas ref={canvasRef}/>
      <Arrows />
      <Images linkDownRef={linkDownRef} linkLeftRef={linkLeftRef} linkRightRef={linkRightRef} linkUpRef={linkUpRef} />
    </div>
  );
}

export default App;
