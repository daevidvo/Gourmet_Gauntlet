import drawCards from "./drawCards";
import createCardElements from "./createCardElements";
import roundStartButton from "./roundStartButton";
import endGameButton from "./endGameButton";
import enemyData from './enemies.json'
import createFields from "./createFields";

export default async function playGame() {
    let game = 'draw'
    let handArr = [];
    let fieldArray = [];
    const hr = document.createElement('hr')
    const br = document.createElement('br')

    // removes the previous play button
    document.getElementById('playButton').remove()


    const gameView = document.getElementById('battle')

    // const startButton = document.createElement('button');
    // startButton.innerHTML = 'Start Battle';
    // startButton.addEventListener('click', startBattle);
    // gameView.appendChild(startButton);

    // once card is selected it is removed from handArr and added to fieldArr
    const selectCard = (card) => {
        if (fieldArray.length < 4) {
            fieldArray.push(card);

            // this isn't doing anything right now cause handArr is empty
            handArr.splice(handArr.indexOf(card), 1);
        }

        // remove HTML card from displayed hand
        card.remove();
    };
    // create view of the enemy field
    createFields(gameView, 'enemyField')

    createCardElements(enemyData[0].gameCards, document.getElementById('enemyField'))

    // create hr to separate the enemy and the player's hand
    gameView.append(br)
    
    // create the div for the player's card they want to play
    createFields(gameView, 'cardField')

    gameView.append(hr)

    // create playerHand
    createFields(gameView, 'playerHand')

    
    // append selected card to field
    const displayCardOnField = (card) => {
        const field = document.getElementById('cardField');
        field.append(card);
    };

    async function drawPhase() {
        // create the cards and puts it into the playerHandDiv
        let handArr = await drawCards();
        createCardElements(handArr, document.getElementById('playerHand'));

        // moves the cards to the field
        document.querySelectorAll('.parentPlayerCardDiv').forEach((card) => {
            card.addEventListener('click', () => {
                // only allows four to be played on the field
                if(document.getElementById('cardField').children.length > 3) {
                    return
                }
                selectCard(card);
                displayCardOnField(card);
            });
        });
    }

    drawPhase();
    roundStartButton();
    endGameButton();

    // ends game and returns the player to the home page
    document.getElementById('endGameButton').addEventListener('click', () => {
        window.location.assign('/')
    })

    // battle itself
    function round1() {
        const playerHand = document.getElementById('playerHand')

        // removes all of the elements in the playerHand
        while(playerHand.children[0]) {
            playerHand.children[0].remove()
        }

        
    }

    document.getElementById('roundStartButton').addEventListener('click', round1)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    while (game === 'battle') {
        
    }
}