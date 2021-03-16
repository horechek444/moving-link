import React from 'react';
import './App.css';

const App = () => {
  const canvasRef = React.useRef(null);
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  const move = (direction) => {
    if (direction === 'up') setY((y) => y - 20);
    if (direction === 'left') setX((x) => x - 20);
    if (direction === 'down') setY((y) => y + 20);
    if (direction === 'right') setX((x) => x + 20);
  };

  // без ререндера окно канваса
  React.useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;
  }, []);

  // с ререндером движения области
  React.useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    context.clearRect(0, 0, window.innerHeight, window.innerWidth);
    context.fillRect(x, y, 100, 100);
  }, [x, y]);

  // слушатель событий окна для клавиш
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowUp') move('up');
      if (event.key === 'ArrowLeft') move('left');
      if (event.key === 'ArrowDown') move('down');
      if (event.key === 'ArrowRight') move('right');
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, []);

  return (
    <div className="app">
      <canvas ref={canvasRef}/>

      <div className="arrows">
        <button onClick={() => move('up')}>Up</button>
        <button onClick={() => move('left')}>Left</button>
        <button onClick={() => move('down')}>Down</button>
        <button onClick={() => move('right')}>Right</button>
      </div>

      <div className="images">
        <img src="https://i.imgur.com/JYUB0m3.png" alt="Down"/>
        <img src="https://i.imgur.com/GEXD7bk.gif" alt="Right"/>
        <img src="https://i.imgur.com/XSA2Oom.gif" alt="Up"/>
        <img src="https://i.imgur.com/4LGAZ8t.gif" alt="Left"/>
      </div>
    </div>
  );
}

export default App;
