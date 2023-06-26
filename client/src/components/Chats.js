import React from "react";

export function Chats({ events }) {
    return (
        <ul>
            {
                events.map((event, index) => {
                    return <li key={index}>{ event }</li>;
                })
            }
        </ul>
    )
} 