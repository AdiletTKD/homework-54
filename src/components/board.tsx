import React from "react";
import Cells from "./cells"

interface GameBoardProps {
  items: Item[];
  onCellClick: (index: number) => void;
}

interface Item {
  hasItem: boolean;
  clicked: boolean;
}

const GameBoard: React.FC<GameBoardProps> = ({ items, onCellClick }) => {
  return (
    <div className="game-board">
      {items.map((item, index) => (
        <Cells
          key={index}
          item={item}
          onClick={() => onCellClick(index)}
        />
      ))}
    </div>
  );
};

export default GameBoard;