import React from "react";

export default function Star(props) {
    const starIcon = props.isFilled ? "star-favorite.png" : "star-unfavorite.png"

    return (
        <img src={`../images/${starIcon}`} className="card--favorite" onClick={props.handleClick} alt="star"/>
    )
}
