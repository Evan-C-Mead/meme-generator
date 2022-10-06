import React from "react";
import './css/App.css';
import Header from "./components/Header";
import Meme from "./components/Meme";
import Contact from "./components/Contact";
import Boxes from "./components/Boxes";

export default function App() {
    return (
        <div>
            <Header/>
            {/*<Meme/>*/}
            {/*<Contact/>*/}
            <Boxes/>
        </div>
    )
}
