import React from "react";
import boxes from "../data/boxes";

export default function Boxes() {
    const [squares, setSquares] = React.useState(boxes)

    const squareElements = squares.map(square => (
        <div className="box" key={square.id}></div>
    ))

    return (
        <main>
            {squareElements}
        </main>
    )
}