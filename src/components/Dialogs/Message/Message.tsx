import React from "react";
import s from './../Dialogs.module.css'

type MessageType = {
    message: string
}

const Message = (props: MessageType) => {

    const messageRef = React.createRef<HTMLTextAreaElement>()

    const addMessage = () => {
        let text = messageRef.current?.value
        alert(text)
    }

    return (
        <div>
            <div>
                <div className={s.message}>{props.message}</div>
            </div>
            <div>
                <textarea ref={messageRef}></textarea>
                <button onClick={addMessage}>x</button>
            </div>

        </div>
    )

}

export default Message