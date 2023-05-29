import React from "react";

interface IProps {
    toggleCell?: React.MouseEventHandler;
    openCell: boolean;
}

const Cell: React.FC<IProps> = ({toggleCell, openCell}) => {
    const cellClasses = ['ToggleButton'];

    if (openCell) {
        cellClasses.push('ToggleButton-white')
    }

    return (
        <div className="cell"></div>
    )
};

export default Cell;