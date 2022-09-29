import React from "react";
import './css/App.css';
import Header from "./components/Header";
import Meme from "./components/Meme";
import Question from "./components/Question";

export default function App() {
    return (
        <div>
            <Header/>
            <Meme/>
            <Question/>
        </div>
    )
}
