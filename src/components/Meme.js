import React from "react";

export default function Meme() {
    return (
        <main>
            <form className="form">
                <input className="form--input" type="text" placeholder="meme top text"/>
                <input className="form--input" type="text" placeholder="meme bottom text"/>
                <button className="form--button">get a new meme image 🖼</button>
            </form>
        </main>
    )
}
