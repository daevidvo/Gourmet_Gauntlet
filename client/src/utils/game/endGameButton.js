export default function endGameButton() {
    const battleField = document.getElementById('battle')

    const endGameButton = document.createElement('button')
    endGameButton.classList.add('button', 'is-danger')
    endGameButton.setAttribute('id', 'endGameButton')
    endGameButton.textContent = 'End Game'

    battleField.children[0].append(endGameButton)
}