import drawCards from "./drawCards"
import { handleAssignCards } from "./handleAssignCards";
import createCardElements from "./createCardElements";


export default async function playGame() {
    let game = true

    const gameView = document.getElementById('battle')

    document.getElementById('endGameButton').addEventListener('click', function () {
        game = false
    })


    while (game === true) {
    let handArr = await drawCards();

    createCardElements(handArr, gameView)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }



}