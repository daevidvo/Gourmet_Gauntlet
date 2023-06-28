import React, { useState, useEffect } from "react";
import { socket } from "../socket";
import { ConnectionState } from "../components/ConnectionState";
import { Chats } from "../components/Chats";
import { GET_ME } from "../utils/queries";
import { useQuery } from "@apollo/client";

// TODO: make it so that the chat will automatically scroll to the bottom
// TODO: style the form so it doesn't look ugly

export function ChatForm() {
    const [formState, setFormState] = useState("");
    const [isLoading, setIsLoading] = useState(false); 

    const { loading, data } = useQuery(GET_ME);
    const username = data?.me?.username;

    function submitChatForm(e) {
        e.preventDefault();
        setIsLoading(true);

        // prevents the user from sending messages for one second
        // use the formatted string to add the username to the message without directly changing formState
        socket.timeout(1000).emit('chat_message', `${username}: ${formState}`, () => {
            setIsLoading(false);
        });
        setFormState("");
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

    function connect() {
        socket.connect();
    }

    function disconnect() {
        socket.disconnect();
    }

    if(loading) {
        return <p>Loading...</p>
    }

    return (
        <div className="columns is-centered">
            <div className="column is-half">
                <ConnectionState isConnected={isConnected} />
                {/* passes the new chats to the Chats component to be displayed */}
                <Chats events={chatEvents} />
                {/* connect and disconnect buttons */}
                <div className="field">
                    <label className="label">Message</label>
                    <div className="control is-4">
                        <input className="input" type="text" value={formState} placeholder="Hello!" onChange={e => setFormState(e.target.value)}/>
                        <button className="button is-danger mt-3" type="submit" disabled={ isLoading } onClick={submitChatForm}>Send</button>
                        {/* only doing mx-1 on on the button below so that the side margins on the edges aren't weird looking */}
                        <button className="button mt-3 mx-1" onClick={connect}>Connect</button>
                        <button className="button is-dark has-text-white mt-3" onClick={disconnect}>Disconnect</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
