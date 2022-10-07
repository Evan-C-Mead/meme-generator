import React from "react";

export default function Box(props) {
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent",
        cursor: "pointer",
        borderColor: props.on ? "black" : "white",
    }

    const textStyle = {
        color: props.on ? "white" : "black",
    }

    let onOff;
    if (props.on === true) {
        onOff = "Dark mode on"
    } else if (props.on === false) {
        onOff = "Dark mode off"
    }

    return (
        <div style={styles} className="box" onClick={() => props.toggle(props.id)}>
            <h5 className="box-header" style={textStyle}>Box {props.id}</h5>
            <p className="box-text" style={textStyle}>{onOff}</p>
        </div>
    )
}
