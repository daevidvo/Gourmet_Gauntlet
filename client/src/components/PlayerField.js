import React from "react";
import { useMutation } from "@apollo/client";
import { useQuery } from "@apollo/client";
import gameCards from "../components/gameCards"
import { GET_PLAYER_CARDS, GET_HEALTH, GET_STAGE } from "../utils/queries";
import { SET_GAME_CARDS, SET_GAME_HEALTH, SET_GAME_STAGE } from "../utils/mutations";

export const PlayerField = () => {
    const [setGameCards] = useMutation(SET_GAME_CARDS);
    const [setGameHealth] = useMutation(SET_GAME_HEALTH);
    const [setGameStage] = useMutation(SET_GAME_STAGE);

    const { loading: loadingPlayerCards, data: PCards } = useQuery(GET_PLAYER_CARDS);
    const { loading: loadingPlayerHealth, data: PHealth } = useQuery(GET_HEALTH);
    const { loading: loadingPlayerStage, data: PStage } = useQuery(GET_STAGE);

    return (
        <>
            {}
        </>
    )
}