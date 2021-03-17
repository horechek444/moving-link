import React from 'react';

const useMovement = () => {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);
  const [direction, setDirection] = React.useState('down');

  const move = (dir) => {
    setDirection(dir);
    if (dir === 'up') setY((y) => y - 20);
    if (dir === 'left') setX((x) => x - 20);
    if (dir === 'down') setY((y) => y + 20);
    if (dir === 'right') setX((x) => x + 20);
  };

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

  return {x, y, direction, move};
};

export default useMovement;