import drawCards from "./drawCards";
import createCardElements from "./createCardElements";
import roundStartButton from "./roundStartButton";
import endGameButton from "./endGameButton";
import enemyData from './enemies.json'
import createFields from "./createFields";

let currStage = 1
let playerHealth = 5


export default async function playGame() {
    // if player's health is less than 0, then we'd reroute them to the home page
    if (!playerHealth) {
        window.location.assign('/')
    }

    let handArr = [];
    let fieldArray = [];
    const hr = document.createElement('hr')
    const br = document.createElement('br')


    // removes the previous play button
    if(document.getElementById('playButton')) {
        document.getElementById('playButton').remove()
    }

    
    // assigning battlefield so that we can use this later on
    const gameView = document.getElementById('battle')

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

    createCardElements(enemyData[currStage-1].gameCards, document.getElementById('enemyField'), 'enemyCards')

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
        createCardElements(handArr, document.getElementById('playerHand'), 'playerHandCard');

        // moves the cards to the field
        document.querySelectorAll('.playerHandCard').forEach((card) => {
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

    // draws the cards and creates the buttons for play functions
    drawPhase();
    roundStartButton();
    endGameButton();

    // ends game and returns the player to the home page
    document.getElementById('endGameButton').addEventListener('click', () => {
        window.location.assign('/')
    })

    // battle itself
    function round(stageNum) {


        if (stageNum) {
            const playerHand = document.getElementById('playerHand')

            // removes all of the elements in the playerHand
            while(playerHand.children[0]) {
                playerHand.children[0].remove()
            }
    
            
    
            
    
            let attackInterval = setInterval(() => {
                // grab the first card from the enemy's and player's hand and their associated values
                const enemyCard = document.getElementById('enemyField').children[0]
                const playerCard = document.getElementById('cardField').children[0]

                // player win case
                if (!enemyCard) {
                    console.log('player wins')
                    currStage++
                    round(currStage)
                    clearInterval(attackInterval)
                    return
                }

                // player lose or tie case
                if (!playerCard || (!playerCard && !enemyCard)) {
                    playerHealth--

                    console.log('player loses')
                    clearInterval(attackInterval)

                    // removes the fields from the battlefield 
                    let elementsToRemove = document.querySelectorAll('.is-flex')
                    elementsToRemove.forEach((element) => {
                        element.remove()
                    })

                    // removes the game function buttons
                    elementsToRemove = document.getElementById('roundStartButton')
                    elementsToRemove.remove()
                    elementsToRemove = document.getElementById('endGameButton')
                    elementsToRemove.remove()

                    // call playGame again
                    playGame() 
                    return
                }

                let enemyCardHealthTextContent = enemyCard.children[1].children[0].children[0].children[1]
                let enemyCardHealth = enemyCardHealthTextContent.textContent
                enemyCardHealth = enemyCardHealth.split(' ')
                enemyCardHealth = enemyCardHealth[1]
                enemyCardHealth = Number(enemyCardHealth)
        
                let enemyCardAttackTextContent = enemyCard.children[1].children[1].textContent
                let enemyCardAttack = enemyCardAttackTextContent
                enemyCardAttack = enemyCardAttack.split(' ')
                enemyCardAttack = enemyCardAttack[1]
                enemyCardAttack = Number(enemyCardAttack)
        
                
                let playerCardHealthTextContent = playerCard.children[1].children[0].children[0].children[1]
                let playerCardHealth = playerCardHealthTextContent.textContent
                playerCardHealth = playerCardHealth.split(' ')
                playerCardHealth = playerCardHealth[1]
                playerCardHealth = Number(playerCardHealth)
                
                let playerCardAttackTextContent = playerCard.children[1].children[1].textContent
                let playerCardAttack = playerCardAttackTextContent
                playerCardAttack = playerCardAttack.split(' ')
                playerCardAttack = playerCardAttack[1]
                playerCardAttack = Number(playerCardAttack)
                
                
                // base case if no more cards on either field
                
                
                // this is base case for seeing each card's health
                
                playerCardHealth = playerCardHealth - enemyCardAttack
                enemyCardHealth = enemyCardHealth - playerCardAttack
                
                if(!enemyCardHealth) {
                    enemyCard.remove()
                }
                
                if(!playerCardHealth) {
                    playerCard.remove()
                }

                console.log('enemy card ', enemyCardHealth, enemyCardAttack)
                console.log('player card ', playerCardHealth, playerCardAttack)

                playerCardHealthTextContent.textContent = playerCardHealth
                enemyCardHealthTextContent.textContent = enemyCardHealth


            }, 500);
        }
        
        
    }

    document.getElementById('roundStartButton').addEventListener('click', () => {
        round(currStage)
    })
    
    
    
    
    

}