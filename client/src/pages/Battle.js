import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import Card from '../components/Card';
import { GET_ALL_CARDS, GET_GAME } from "../utils/queries";

/* 
On page load:
    check Game via userId
        if not exist, make new Game object
    from Game object
        get health
            current cards
            stage number
    query Cards

while (userHealh > 0)
{
Draw phase:
    draw 5 cards (math rand/floor)
    allow user to assign cards to field 

On click battle button:
Load enemy cards
(do-while loop condition h1 > 0 && h2 > 0)
    Subtract a1 from h2 && a2 from h1 (with timeout)
        If either h is negative or 0, that card dies (either bounces or grays and disappears)
            The cards after the dead card slide forward to fill the slot (if slot zero is first)
            If enemy has cards; player does not
                player takes 1 damage
            If player has; enemy does not
                player wins; next enemy
        If neither h is negative, repeat the process 

Post-battle:
    update Game information
        userHealth
        userStage
        userCards
}
*/

const Battle =  () => {
    const { loading, data } = useQuery(GET_ALL_CARDS);
    const cards = data?.getAllCards;
    console.log(data);
    console.log(cards);
    
    if(loading){
        return (
            <h1> Loading </h1>
        )
    }

    let randArray = [];
    const fiveRandCards = () => {
        randArray = [];
        for (let i = 0; i < 5; i++){
            let randNum = Math.floor(Math.random() * 14); //5 rand cards from 14 card db
            randArray.push(cards[randNum]);
        }
        console.log(randArray);

        return null;
    }

    fiveRandCards();


return (
    <div className="is-flex">
        {randArray.map((cardData) => <Card {...cardData} />)}
    </div>
)
}

export default Battle