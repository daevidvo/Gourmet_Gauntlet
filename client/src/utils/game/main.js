import drawCards from "./drawCards";
import createCardElements from "./createCardElements";


export default async function playGame() {
    let game = 'draw'
    let handArr = [];
    let fieldArray = [];

    const gameView = document.getElementById('battle')

    const startButton = document.createElement('button');
    startButton.innerHTML = 'Start Battle';
    startButton.addEventListener('click', startBattle);
    gameView.appendChild(startButton);

    // once card is selected it is removed from handArr and added to fieldArr
    const selectCard = (card) => {
        if (fieldArray.length < 4) {
            fieldArray.push(card);
            handArr.splice(handArr.indexOf(card), 1);
        }
        // remove HTML card from displayed hand
        card.remove();
    };

    // button to switch to battle phase
    const startBattle = () => {
        game = "battle";
    };

    // create view of field above hand
    const fieldView = document.createElement('div').setAttribute('id','field');
    gameView.appendChild(fieldView);

    // append selected card to field
    const displayCardOnField = (card) => {
        const field = document.getElementById('field');
        field.appendChild(card);
    };

    // button to end game
    document.getElementById('endGameButton').addEventListener('click', function () {
        game = false
    });

    async function drawPhase() {
        let handArr = await drawCards();
        createCardElements(handArr, gameView);
        document.querySelectorAll('.parentPlayerCardDiv').forEach((card) => {
            card.addEventListener('click', () => {
                selectCard(card);
                displayCardOnField(card);
            });
        });
    }

    drawPhase();

    // battle itself
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    while (game === 'battle') {
        
    }
}