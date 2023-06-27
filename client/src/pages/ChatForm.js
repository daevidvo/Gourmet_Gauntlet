import React, { useState, useEffect } from "react";
import { socket } from "../socket";
import { ConnectionManager } from "../components/ConnectionManager";
import { ConnectionState } from "../components/ConnectionState";
import { Chats } from "../components/Chats";

// TODO: make it so that the chat will automatically scroll to the bottom
// TODO: style the form so it doesn't look ugly
// TODO: grab the username of the user and append it to the msg

export function ChatForm() {
    const [formState, setFormState] = useState("");
    const [isLoading, setIsLoading] = useState(false); 

    function submitChatForm(e) {
        e.preventDefault();
        setIsLoading(true);

        // prevents the user from sending messages for one second
        socket.timeout(1000).emit('chat_message', formState, () => {
            setIsLoading(false);
        });
        
    }

    const [isConnected, setIsConnected] = useState(socket.connected);
    const [chatEvents, updateChatEvents] = useState([]);

    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
            // if someone's connected then they will be able to click on the "send" button
            setIsLoading(false);
        }

        function onDisconnect() {
            setIsConnected(false);
            // if they're disconnected, then the "send" button will be greyed out
            setIsLoading(true);
        }

        function onChatEvent(msg) {
            // takes all of the old messages and adds on the new one at the bottom
            updateChatEvents(oldMsgs => [...oldMsgs, msg]);
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('chat_message', onChatEvent);
    }, []);

    return (
        <div>
            <ConnectionState isConnected={isConnected} />
            {/* passes the new chats to the Chats component to be displayed */}
            <Chats events={chatEvents} />
            {/* connect and disconnect buttons */}
            <ConnectionManager />
            <form onSubmit={submitChatForm}>
                <input onChange={e => setFormState(e.target.value)}/>
                <button type="submit" disabled={ isLoading }>Send</button>
            </form>
        </div>
    );
}
