import React from "react";
import './css/App.css';
import Header from "./components/Header";
import Meme from "./components/Meme";
import Contact from "./components/Contact";
import Boxes from "./components/Boxes";
import Messages from "./components/Messages";
import Form from "./components/Form";

export default function App() {
    return (
        <div>
            <Header/>
            {/*<Meme/>*/}
            {/*<Contact/>*/}
            {/*<Boxes/>*/}
            {/*<Messages/>*/}
            <Form/>
        </div>
    )
}
