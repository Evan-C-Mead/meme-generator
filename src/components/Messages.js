import React from "react";

export default function Messages() {
    const [messages, setMessages] = React.useState(["msg_1", "msg_2", "msg_3"])
    const [newMessages, setNewMessages] = React.useState([])

    return (
        <div>
            {messages.length > 0 && <h1>You have {messages.length} unread messages</h1>}
            {newMessages.length === 0 && <h1>You have {newMessages.length} unread messages</h1>}
        </div>
    )
}