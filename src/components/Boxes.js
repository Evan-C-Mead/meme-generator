import React from "react";
import boxes from "../data/boxes";
import Box from "./Box";

export default function Boxes() {
    const [squares, setSquares] = React.useState(boxes)

    function toggle(id) {
        setSquares(prevSquares => {
            return prevSquares.map((square) => {
                return square.id === id ? {...square, on: !square.on} : square
            })
        })
        console.log(`Box ${id} was clicked!`)
    }

    const squareElements = squares.map(square => (
        <Box key={square.id} id={square.id} on={square.on} toggle={() => toggle(square.id)}/>
    ))

    return (
        <main className="boxes">
            {squareElements}
        </main>
    )
}
