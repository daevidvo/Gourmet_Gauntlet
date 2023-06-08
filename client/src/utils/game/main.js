import drawCards from "./drawCards";
import createCardElements from "./createCardElements";
import roundStartButton from "./roundStartButton";
import endGameButton from "./endGameButton";
import enemyData from './enemies.json'

export default async function playGame() {
    let game = 'draw'
    let handArr = [];
    let fieldArray = [];

    // on end game relocate to root URL


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

    // // button to switch to battle phase
    // const startBattle = () => {
    //     game = "battle";
    // };

    // create view of field above hand
    const fieldView = document.createElement('div')
    fieldView.setAttribute('id','field');
    fieldView.classList.add('is-flex', 'is-justify-content-center')
    gameView.append(fieldView);

    
    // create hr to separate the field and the player's hand
    const hr = document.createElement('hr')
    gameView.append(hr)
    
    // create the div for the player's hand
    const playerHandDiv = document.createElement('div')
    playerHandDiv.setAttribute('id', 'playerHandDiv')
    playerHandDiv.classList.add('is-flex', 'is-justify-content-center')
    gameView.append(playerHandDiv)
    
    // append selected card to field
    const displayCardOnField = (card) => {
        const field = document.getElementById('field');
        field.append(card);
    };

    async function drawPhase() {

        

        // create the cards and puts it into the playerHandDiv
        let handArr = await drawCards();
        createCardElements(handArr, document.getElementById('playerHandDiv'));

        // moves the cards to the field
        document.querySelectorAll('.parentPlayerCardDiv').forEach((card) => {
            card.addEventListener('click', () => {
                // only allows four to be played on the field
                if(document.getElementById('field').children.length > 3) {
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
    
    console.log(enemyData[0])

    // battle itself


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    while (game === 'battle') {
        
    }
}