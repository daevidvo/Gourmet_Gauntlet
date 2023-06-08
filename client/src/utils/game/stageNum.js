export default function stageNumberEl(stage) {
    const battleField = document.getElementById('battle');

    const stageNumber = document.createElement('button');
    stageNumber.classList.add('button', 'is-success');
    stageNumber.setAttribute('id', 'stageNumber');
    stageNumber.textContent = `Stage: ${stage}`;

    battleField.children[0].append(stageNumber);
}