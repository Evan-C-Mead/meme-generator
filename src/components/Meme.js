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

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input className="form--input" type="text" placeholder="meme top text" onChange={handleChange} name="topText" value={meme.topText}/>
                <input className="form--input" type="text" placeholder="meme bottom text" onChange={handleChange} name="bottomText" value={meme.bottomText}/>
                <button className="form--button" onClick={getMemeImage}>get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="meme" className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
