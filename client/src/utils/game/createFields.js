export default function createFields(gameView, nameOfField) {
    const element = document.createElement('div')
    element.setAttribute('id',`${nameOfField}`);
    element.classList.add('is-flex', 'is-justify-content-center', 'columns')
    gameView.append(element);
}