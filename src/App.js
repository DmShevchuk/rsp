// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Rock from './components/Rock';
import Paper from './components/Paper';
import Scissors from './components/Scissors';
import SpeedSlider from './components/SpeedSlider';
import GameOverModal from './components/GameOverModal';

const initialItems = () => {
  let items = [];

  // Область для камней (верхний левый угол)
  for (let i = 0; i < 20; i++) {
    items.push({ type: 'rock', x: Math.random() * 100, y: Math.random() * 100, dx: (Math.random() - 0.5) * 2, dy: (Math.random() - 0.5) * 2 });
  }

  // Область для бумаги (верхний правый угол)
  for (let i = 0; i < 20; i++) {
    items.push({ type: 'paper', x: 300 + Math.random() * 100, y: Math.random() * 100, dx: (Math.random() - 0.5) * 2, dy: (Math.random() - 0.5) * 2 });
  }

  // Область для ножниц (нижний левый угол)
  for (let i = 0; i < 20; i++) {
    items.push({ type: 'scissors', x: Math.random() * 100, y: 300 + Math.random() * 100, dx: (Math.random() - 0.5) * 2, dy: (Math.random() - 0.5) * 2 });
  }

  return items;
};

const App = () => {
  const [items, setItems] = useState(initialItems());
  const [speed, setSpeed] = useState(30);  // Начальная скорость в новом диапазоне
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState('');

  const moveItems = () => {
    setItems(prevItems =>
        prevItems.map(item => {
          let { x, y, dx, dy } = item;
          x += dx;
          y += dy;

          if (x <= 0 || x >= 450) dx *= -1;
          if (y <= 0 || y >= 450) dy *= -1;

          return { ...item, x, y, dx, dy };
        })
    );
  };

  const handleCollisions = () => {
    setItems(prevItems => {
      let newItems = [...prevItems];
      for (let i = 0; i < newItems.length; i++) {
        for (let j = i + 1; j < newItems.length; j++) {
          if (Math.abs(newItems[i].x - newItems[j].x) < 20 && Math.abs(newItems[i].y - newItems[j].y) < 20) {
            if (
                (newItems[i].type === 'rock' && newItems[j].type === 'scissors') ||
                (newItems[i].type === 'scissors' && newItems[j].type === 'paper') ||
                (newItems[i].type === 'paper' && newItems[j].type === 'rock')
            ) {
              newItems.splice(j, 1);
              j--;
            } else if (
                (newItems[j].type === 'rock' && newItems[i].type === 'scissors') ||
                (newItems[j].type === 'scissors' && newItems[i].type === 'paper') ||
                (newItems[j].type === 'paper' && newItems[i].type === 'rock')
            ) {
              newItems.splice(i, 1);
              i--;
              break;
            }
          }
        }
      }
      return newItems;
    });
  };

  const checkGameOver = () => {
    const remainingTypes = new Set(items.map(item => item.type));
    if (remainingTypes.size === 1) {
      setWinner(Array.from(remainingTypes)[0]);
      setGameOver(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveItems();
      handleCollisions();
      checkGameOver();
    }, speed);

    return () => clearInterval(interval);
  }, [items, speed]);

  const resetGame = () => {
    setItems(initialItems());
    setGameOver(false);
    setWinner('');
  };

  return (
      <div className="App">
        <div className="background"></div>
        <SpeedSlider speed={speed} setSpeed={setSpeed} />
        <div className="board">
          {items.map((item, index) => {
            if (item.type === 'rock') {
              return <Rock key={index} x={item.x} y={item.y} />;
            } else if (item.type === 'paper') {
              return <Paper key={index} x={item.x} y={item.y} />;
            } else {
              return <Scissors key={index} x={item.x} y={item.y} />;
            }
          })}
        </div>
        <button className="restart-button" onClick={resetGame}>Restart Game</button>
        {gameOver && <GameOverModal isOpen={gameOver} winner={winner} onRequestClose={resetGame} />}
      </div>
  );
};

export default App;
