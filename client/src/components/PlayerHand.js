import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import Card from "../components/Card";
import { GET_ALL_CARDS } from "../utils/queries";
import drawCards from "../utils/game/drawCards";

export const PlayerHand = () => {
    const { loading, data } = useQuery(GET_ALL_CARDS);
    
    const cards = data?.getAllCards;
    
    if (loading) {
        return <h1> Loading </h1>;
    }



    let handArr = drawCards(cards)



    return (
        <>
            {handArr.map((cardData) => (
                <Card {...cardData}/>
            ))}

        </>
    )
}