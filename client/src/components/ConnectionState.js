import React from "react";

export function ConnectionState({isConnected}) {
    if(isConnected) {
        return <p>Connected to chat</p>
    } else {
        return <p>Disconnected from chat</p>
    }
}