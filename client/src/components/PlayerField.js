import React from "react";
import { useMutation } from "@apollo/client";
import gameCards from "../components/gameCards"
import { GET_GAME } from "../utils/queries";
import { SET_GAME_CARDS, SET_GAME_HEALTH, SET_GAME_STAGE } from "../utils/mutations";

export const PlayerField = () => {
    const [setGameCards] = useMutation(SET_GAME_CARDS);
    const [setGameHealth] = useMutation(SET_GAME_HEALTH);
    const [setGameStage] = useMutation(SET_GAME_STAGE)

    return (
        <>
            {}
        </>
    )
}