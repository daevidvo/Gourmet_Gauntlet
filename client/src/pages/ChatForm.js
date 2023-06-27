import React, { useState, useEffect } from "react";
import { socket } from "../socket";
import { ConnectionManager } from "../components/ConnectionManager";
import { ConnectionState } from "../components/ConnectionState";
import { Chats } from "../components/Chats";

export function ChatForm() {
    const [formState, setFormState] = useState("");
    const [isLoading, setIsLoading] = useState(false); 

    function submitChatForm(e) {
        e.preventDefault();
        setIsLoading(true);

        socket.timeout(1000).emit('chat_message', formState, () => {
            setIsLoading(false);
        });
        
    }

    const [isConnected, setIsConnected] = useState(socket.connected);
    const [chatEvents, updateChatEvents] = useState([]);

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
            setIsLoading(false);
        }

        function onDisconnect() {
            setIsConnected(false);
            setIsLoading(true);
        }

        function onChatEvent(msg) {
            updateChatEvents(oldMsgs => [...oldMsgs, msg]);
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('chat_message', onChatEvent);
    }, []);

    return (
        <div>
            <ConnectionState isConnected={isConnected} />
            <Chats events={chatEvents} />
            <ConnectionManager />
            <form onSubmit={submitChatForm}>
                <input onChange={e => setFormState(e.target.value)}/>
                <button type="submit" disabled={ isLoading }>Send</button>
            </form>
        </div>
    );
}
