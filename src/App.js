import React from "react";
import './css/App.css';
import Header from "./components/Header";
import Meme from "./components/Meme";

export default function App() {
    // function greeting(name) {
    //     const date = new Date()
    //     const hours = date.getHours()
    //
    //     let timeOfDay
    //     if(hours >= 4 && hours < 12) {
    //         timeOfDay = "morning"
    //     } else if(hours >= 12 && hours < 17) {
    //         timeOfDay = "afternoon"
    //     } else if(hours >= 17 && hours < 20) {
    //         timeOfDay = "evening"
    //     } else {
    //         timeOfDay = "night"
    //     }
    //     return `Good ${timeOfDay}, ${name}!`
    // }
    //
    // console.log(greeting("Dude"))

    const [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div>
            <Header/>
            <Meme/>
            <div className="counter">
                <button onClick={subtract}>–</button>
                <div>
                    <h1>{count}</h1>
                </div>
                <button onClick={add}>+</button>
            </div>
        </div>
    )
}
