export default function playerHealthEl(health) {
    const battleField = document.getElementById('battle');

    const playerHealth = document.createElement('button');
    playerHealth.classList.add('button', 'is-warning', 'mt-4');
    playerHealth.setAttribute('id', 'playerHealth');
    playerHealth.textContent = `Lives Left: ${health}`;

    battleField.children[0].append(playerHealth);
}