import React from "react";
import './css/App.css';
import Header from "./components/Header";
import Meme from "./components/Meme";
import Contact from "./components/Contact";

export default function App() {
    return (
        <div>
            <Header/>
            {/*<Meme/>*/}
            <Contact/>
        </div>
    )
}
