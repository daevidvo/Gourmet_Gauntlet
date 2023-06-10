export default function createGameButtons(button, battleField, optionalValue) {
    switch (button) {
        case 'endGameButton':

            const endGameButton = document.createElement('button')
            endGameButton.classList.add('button', 'is-danger', 'mt-4')
            endGameButton.setAttribute('id', 'endGameButton')
            endGameButton.textContent = 'End Game'
        
            battleField.children[0].append(endGameButton)
            break;
        case 'playerHealthElement':

            const playerHealth = document.createElement('button');
            playerHealth.classList.add('button', 'is-warning', 'mt-4');
            playerHealth.setAttribute('id', 'playerHealth');
            playerHealth.textContent = `Lives Left: ${optionalValue}`;
        
            battleField.children[0].append(playerHealth);
            break;
        case 'stageNum':
            const stageNumber = document.createElement('button');
            stageNumber.classList.add('button', 'is-warning', 'mt-4');
            stageNumber.setAttribute('id', 'stageNumber');
            stageNumber.textContent = `Stage: ${optionalValue}`;
        
            battleField.children[0].append(stageNumber);
            break;
        case 'roundStartButton':
            // makes button
            const startRoundButton = document.createElement('button')
            startRoundButton.classList.add('button', 'is-success', 'mt-4')
            startRoundButton.setAttribute('id', 'roundStartButton')
            startRoundButton.textContent = 'Start Round'
        
            // appends button to battleField
            battleField.children[0].append(startRoundButton)
            break;
    
        default:
            return 'How\'d you get here?'
    }
}