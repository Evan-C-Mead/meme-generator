import React from "react";

export default function Counter() {
    const [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div className="counter">
            <button onClick={subtract}>–</button>
            <div>
                <h1>{count}</h1>
            </div>
            <button onClick={add}>+</button>
        </div>
    )
}