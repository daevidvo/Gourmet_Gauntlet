import drawCards from "./drawCards"
import { handleAssignCards } from "./handleAssignCards";
import createCardElements from "./createCardElements";


export default async function playGame() {
    let game = 'draw'

    const gameView = document.getElementById('battle')

    document.getElementById('endGameButton').addEventListener('click', function () {
        game = false
    })


    while (game === 'draw') {
    let handArr = await drawCards();

    createCardElements(handArr, gameView)
    
    // create cards

    // create select functionality

    // once the cards are finished selecting, then we do handleAssignCards

    // battle itself
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }

    while (game === 'battle') {
        
    }


}