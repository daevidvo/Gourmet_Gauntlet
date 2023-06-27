import React, { useContext } from "react";
import playGame from "../utils/game/main";
import { ThemeContext } from "../utils/context/ThemeContext";

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

const Battle = () => {
  const isDark = useContext(ThemeContext);

  return (
    <div id={`${isDark ? "battle-dark" : "battle"}`} className="hero is-fullheight">
        <div className="buttons is-centered">
            <button className="button is-danger is-large mt-4" id="playButton" onClick={playGame}>Play</button>
        </div>
    </div>
  );
};

export default Battle;
