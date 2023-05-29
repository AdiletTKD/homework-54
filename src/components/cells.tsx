import React from "react";

interface IProps {
    toggleCell?: React.MouseEventHandler;
    clicked: boolean;
    hasItem: boolean;
}

const Cell: React.FC<IProps> = ({ clicked }) => {
    const cellClasses = ['ToggleButton'];

    if (clicked) {
        cellClasses.push('ToggleButton-white')
    }

    return (
        <div className="cell">{ clicked }</div>
    )
};

export default Cell;