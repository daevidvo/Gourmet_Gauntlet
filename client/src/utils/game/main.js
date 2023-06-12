import drawCards from "./drawCards";
import createCardElements from "./createCardElements";
import enemyData from './enemies.json';
import createFields from "./createFields";
import deleteGameButton from "./deleteGameButtons";
import createModal from "./roundEndModal";
import showModal from "./showModal";
import closeModal from "./closeModal";
import displayCardOnField from "./displayCardOnField";
import selectCard from "./selectCard";
import animateCardHit from "./animateCardHit";
import createGameButtons from "./createGameButtons";

let currStage = 1;
let playerHealth = 5;

export default async function playGame() {

    // debugger;

    // assigning battlefield so that we can use this later on
    const gameView = document.getElementById('battle')

    // if player's health is less than 0, then we'd reroute them to the gameover page
    if (!playerHealth) {
        fetch('/api/players/', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token: localStorage.getItem('id_token'),
                condition: 'loss'
            })
        }).catch((err) => console.error(err))

        createModal('NO MORE LIVES!!!', gameView);
        showModal();
        setTimeout(() => {
            closeModal();
            window.location.assign('/gameover');
        }, 2000)
        return;
    }

    // if the current stage is more then however any enemies we have, then the player has won the game.
    if (currStage > enemyData.length) {
        // updates player stats
        fetch('/api/players/', {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                token: localStorage.getItem('id_token'),
                condition: 'win'
            })
        }).catch((err) => console.error(err))

        createModal('YOU WON THE GAME!!!', gameView);
        showModal();
        setTimeout(() => {
            closeModal();
            window.location.assign('/gameover');
        }, 2000)
        return;
    }

    const br = document.createElement('br');

    // removes the previous play button
    if (document.getElementById('playButton')) {
        document.getElementById('playButton').remove();
    }
    // removes the previous stageNumber button
    if (document.getElementById('stageNumber')) {
        document.getElementById('stageNumber').remove();
    }

    //removes br elements from previous round
    if (document.querySelectorAll('br')) {
        const elementsToRemove = document.querySelectorAll('br');
        elementsToRemove.forEach((element) => element.remove());
    }

    // create view of the enemy field
    createFields(gameView, 'enemyField');

    // loads enemy data and creates their cards
    createCardElements(enemyData[currStage - 1].gameCards, document.getElementById('enemyField'), 'enemyCards');

    // create hr to separate the enemy and the player's hand
    gameView.append(br);

    // create the div for the player's card they want to play
    createFields(gameView, 'cardField');

    gameView.append(br);

    // create playerHand
    createFields(gameView, 'playerHand');

    async function drawPhase() {
        // create the cards and puts it into the playerHandDiv
        let handArr = await drawCards(currStage);
        createCardElements(handArr, document.getElementById('playerHand'), 'playerHandCard');

        // event listeners for moving the cards to the field
        document.querySelectorAll('.playerHandCard').forEach((card) => {
            card.addEventListener('click', () => {
                // only allows four cards to be played on the field
                if (document.getElementById('cardField').children.length > 3) {
                    return;
                }

                // once card is selected it is removed from handArr and added to fieldArr
                selectCard(card);

                // append selected card to field
                displayCardOnField(card);
            });
        });
    }

    // draws the cards and creates the buttons for play functions
    drawPhase();
    createGameButtons('stageNum', gameView, currStage);
    createGameButtons('roundStartButton', gameView);
    createGameButtons('endGameButton', gameView);
    createGameButtons('playerHealthElement', gameView, playerHealth);

    // battle itself
    function round() {
        const playerHand = document.getElementById('playerHand');

        // removes all of the elements in the playerHand
        while (playerHand.children[0]) {
            playerHand.children[0].remove();
        }

        let attackInterval = setInterval(() => {
            // grab the first card from the enemy's and player's hand and their associated values
            const enemyCard = document.getElementById('enemyField').children[0];
            const playerCard = document.getElementById('cardField').children[0];

            // player lose or tie case
            if (!playerCard || (!playerCard && !enemyCard)) {
                playerHealth--;

                console.log('player loses');
                clearInterval(attackInterval);

                deleteGameButton();
                createModal('YOU LOST :(', gameView);
                showModal();
                // call playGame again
                setTimeout(() => {
                    closeModal();
                    playGame();
                }, 2000);
                return;
            }

            // player win case
            if (!enemyCard && playerCard) {
                console.log('player wins');
                
                currStage++;
                deleteGameButton();
                clearInterval(attackInterval);
                createModal('YOU WON :)', gameView);
                showModal();
                setTimeout(() => {
                    closeModal();
                    playGame();
                }, 2000);

                return;
            }

            // DOM traversal to grab player and enemy health/attack
            let enemyCardHealthTextContent = enemyCard.children[1].children[0].children[0].children[1];
            let enemyCardHealth = enemyCardHealthTextContent.textContent;;
            enemyCardHealth = enemyCardHealth.split(' ');
            enemyCardHealth = enemyCardHealth[1];
            enemyCardHealth = Number(enemyCardHealth);
            console.log('enemy card health ', enemyCardHealth)

            let enemyCardAttackTextContent = enemyCard.children[1].children[1].textContent;
            let enemyCardAttack = enemyCardAttackTextContent;
            enemyCardAttack = enemyCardAttack.split(' ');
            enemyCardAttack = enemyCardAttack[1];
            enemyCardAttack = Number(enemyCardAttack);

            let playerCardHealthTextContent = playerCard.children[1].children[0].children[0].children[1];
            let playerCardHealth = playerCardHealthTextContent.textContent;
            playerCardHealth = playerCardHealth.split(' ');
            playerCardHealth = playerCardHealth[1];
            playerCardHealth = Number(playerCardHealth);
            console.log('player card health ', playerCardHealth)

            let playerCardAttackTextContent = playerCard.children[1].children[1].textContent;
            let playerCardAttack = playerCardAttackTextContent;
            playerCardAttack = playerCardAttack.split(' ');
            playerCardAttack = playerCardAttack[1];
            playerCardAttack = Number(playerCardAttack);

            animateCardHit(playerCard, enemyCard);

            playerCardHealth = playerCardHealth - enemyCardAttack;
            // shout out david chung for solving mega game breaking bug in this single line of code
            enemyCardHealth = enemyCardHealth - playerCardAttack;
            console.log('player attack')
            console.log('enemy attack')

            // sometimes Number() will randomly pop out a NaN during early development so this is why we have both falsy and < 1 checkers
            if (!enemyCardHealth || enemyCardHealth < 1) {
                setTimeout(() => {
                    enemyCard.remove();
                }, 500);
            }

            if (!playerCardHealth || playerCardHealth < 1) {
                setTimeout(() => {
                    playerCard.remove();
                }, 500);
            }

            console.log('enemy card ', enemyCardHealth, enemyCardAttack);
            console.log('player card ', playerCardHealth, playerCardAttack);

            // updating cards to reflect dmg/health
            playerCardHealthTextContent.textContent = "Health: " + playerCardHealth;
            enemyCardHealthTextContent.textContent = "Health: " + enemyCardHealth;

        }, 1500);
    }

    document.getElementById('roundStartButton').addEventListener('click', () => {
        round(currStage);
    })

    document.getElementById('endGameButton').addEventListener('click', () => {
        window.location.assign('/');
    })
}