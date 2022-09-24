import React from "react";
import memesData from "../data/memesData";

export default function Meme() {
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
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
