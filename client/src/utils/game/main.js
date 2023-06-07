import drawCards from "./drawCards"
import { handleAssignCards } from "./handleAssignCards";
import createCardElements from "./createCardElements";


export default async function playGame() {
    let game = 'draw'
    let handArr = [];

    const gameView = document.getElementById('battle')

    const startButton = document.createElement('button');
    startButton.innerHTML = 'Start Battle';
    startButton.addEventListener('click', startBattle);
    gameView.appendChild(startButton);

    // once card is selected it is removed from handArr and added to fieldArr
    const selectCard = (card) => {
        handleAssignCards(handArr, card);
        const selectedCard = document.getElementById(card.id);
        selectedCard.remove();
    };

    // button to switch to battle phase
    const startBattle = () => {
        game = "battle";
    };

    // button to end game
    document.getElementById('endGameButton').addEventListener('click', function () {
        game = false
    });


    function drawPhase() {
        let handArr = await drawCards();
        createCardElements(handArr, gameView);
        document.querySelectorAll('.parentPlayerCardDiv').forEach((card) => {
            card.addEventListener('click', () => {
                selectCard(card);
            });
        });
    }

    drawPhase();
    
    
    // create cards

    // create select functionality

    // once the cards are finished selecting, then we do handleAssignCards

    // battle itself
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }

    while (game === 'battle') {
        
    }


}