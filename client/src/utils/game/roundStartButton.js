export default function roundStartButton() {
    const battleField = document.getElementById('battle')

    // makes button
    const startRoundButton = document.createElement('button')
    startRoundButton.classList.add('button', 'is-success')
    startRoundButton.setAttribute('id', 'roundStartButton')
    startRoundButton.textContent = 'Start Round'

    // appends button to battleField
    battleField.children[0].append(startRoundButton)
}