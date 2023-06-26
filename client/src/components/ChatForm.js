import React, {useState} from "react";
import { socket } from "../socket";

export function ChatForm() {
    const [formState, setFormState] = useState("");
    const [isLoading, setIsLoading] = useState(false); 

    function submitChatForm(e) {
        e.preventDefault();
        setIsLoading(true);

        socket.timeout(5000).emit('chat_message', formState, () => {
            setIsLoading(false);
        });
    }

    return (
        <form onSubmit={submitChatForm}>
            <input onChange={e => setFormState(e.target.value)}/>
            <button type="submit" disabled={ isLoading }>Send</button>
        </form>
    );
}
