import React from "react";
import memesData from "../data/memesData";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg",
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))

    }

    return (
        <main>
            <div className="form">
                <input className="form--input" type="text" placeholder="meme top text"/>
                <input className="form--input" type="text" placeholder="meme bottom text"/>
                <button className="form--button" onClick={getMemeImage}>get a new meme image 🖼</button>
            </div>
            <div className="memeImage">
                <img src={meme.randomImage} alt="meme" className="meme--image"/>
            </div>
        </main>
    )
}
