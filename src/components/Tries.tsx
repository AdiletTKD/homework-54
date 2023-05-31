import React from "react";

interface ITriesProps {
    tries: number;
}

const Tries: React.FC<ITriesProps> = ({ tries }) => {
    return <p>Tries { tries }</p>
}

export default Tries;