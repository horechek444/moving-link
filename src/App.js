import React from 'react';
import './App.css';

const App = () => {
  const canvasRef = React.useRef(null);
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

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

  return (
    <div className="app">
      <canvas ref={canvasRef}/>

      <div className="arrows">
        <button onClick={() => setY((y) => y - 20)}>Up</button>
        <button onClick={() => setX((x) => x - 20)}>Left</button>
        <button onClick={() => setY((y) => y + 20)}>Down</button>
        <button onClick={() => setX((x) => x + 20)}>Right</button>
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
