export default function playButton() {
    const gameView = document.getElementById('battle')

    const buttonsDiv = document.createElement('div')
    buttonsDiv.classList.add('buttons')

    const battleButton = document.createElement('button')
    battleButton.classList.add('button', 'is-danger')
    battleButton.textContent = 'testing'
    buttonsDiv.append(battleButton)

    gameView.append(buttonsDiv)
}