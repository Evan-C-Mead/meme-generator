import React from "react";

export default function Messages() {
    // const [messages, setMessages] = React.useState(["msg_1", "msg_2", "msg_3"])
    // const [messages, setMessages] = React.useState(["msg_1", "msg_2"])
    // const [messages, setMessages] = React.useState(["msg_1"])
    const [messages, setMessages] = React.useState([])

    return (
        <div>
            {
                messages.length === 0 ?
                <h1>You're all caught up! No new messages.</h1> :
                <h1>You have {messages.length} unread {messages.length > 1 ? "messages." : "message."}</h1>
            }
        </div>
    )
}