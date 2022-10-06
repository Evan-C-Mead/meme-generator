import React from "react";
import boxes from "../data/boxes";
import Box from "./Box";

export default function Boxes() {
    const [squares, setSquares] = React.useState(boxes)

    const squareElements = squares.map(square => (
        <Box key={square.id} on={square.on}/>
    ))

    return (
        <main>
            {squareElements}
        </main>
    )
}
