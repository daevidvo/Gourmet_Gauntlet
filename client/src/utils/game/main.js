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

    // creates onclick for each card and displays card through jsx
    // const createCardElement = (card) => (
    //     <div id={card.id} onClick={() => selectCard(card)}>

    //     </div>
    // );

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


    while (game === 'draw') {
    let handArr = await drawCards();
    const cardElements = handArr.map((card) => createCardElement(card));
    ReactDOM.render(cardElements, gameView);
    
    // create cards

    // create select functionality

    // once the cards are finished selecting, then we do handleAssignCards

    // battle itself
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }

    while (game === 'battle') {
        
    }


}