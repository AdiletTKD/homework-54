import React, { useState } from 'react';
import Tries from './components/Tries';
import Board from "../src/components/board";
import Button from './components/button';
import './App.css';

interface Item {
  hasItem: boolean;
  clicked: boolean;
}

const createItems = (): Item[] => {
  const items: Item[] = [];
  for (let i = 0; i < 36; i++) {
    items.push({ hasItem: false, clicked: false })
  }
  const randomIndex = Math.floor(Math.random() * 36);
  items[randomIndex].hasItem = true;
  return items;
}

const App = () => {
  const [items, setItems] = useState<Item[]>(createItems());
  const [tries, setTries] = useState<number>(0);

  const handleCellClick = (index: number) => {
    if (!items[index].clicked) {
      const newItems = [...items];
      newItems[index].clicked = true;
      setItems(newItems);
      setTries((prevTries) => prevTries + 1);
    }
  };

  const handleReset = () => {
    setItems(createItems());
    setTries(0)
  }

  return (
    <div className="App">
      <Board items={items} onCellClick={handleCellClick} />
};

export default App;

