import { spawn } from "child_process";
import React, { useState } from "react";

interface IProps {
    item: Item;
    onClick: () => void
}

interface Item {
    hasItem: boolean;
    clicked: boolean;
}

const Cell: React.FC<IProps> = ({item, onClick}) => {
    return (
        <div className={`cell ${item.clicked ? "clicked" : " "}`} onClick={onClick}>
            {item.clicked && item.hasItem && <span>O</span>}
        </div>
    )
};

export default Cell;