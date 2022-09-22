import React from "react";
import memesData from "../data/memesData";

export default function Meme() {
    function getMemeImage(){
        console.log("clicked")
    }

    return (
        <main>
            <div className="form">
                <input className="form--input" type="text" placeholder="meme top text"/>
                <input className="form--input" type="text" placeholder="meme bottom text"/>
                <button className="form--button" onClick={getMemeImage}>get a new meme image 🖼</button>
            </div>
        </main>
    )
}
