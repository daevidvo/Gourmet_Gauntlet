export default function createCardElements (cardsArr, gameView) {
    
    cardsArr.forEach((data) => {
        const parentCardDiv = document.createElement('div')
        parentCardDiv.classList.add('card', 'w-4', 'parentPlayerCardDiv')

        const cardImageDiv = document.createElement('div')
        cardImageDiv.classList.add('card-image')

        const cardImageFigure = document.createElement('figure')
        cardImageFigure.classList.add('is-4by3')

        const cardImage = document.createElement('img')
        cardImage.setAttribute('src', data.cardImage)

        const cardContentDiv = document.createElement('div')
        cardContentDiv.classList.add('card-content')

        const cardMediaDiv = document.createElement('div')
        cardMediaDiv.classList.add('media')

        const cardMediaContent = document.createElement('div')
        cardMediaContent.classList.add('media-content')

        const cardNamePTag = document.createElement('p')
        cardNamePTag.classList.add('title', 'is-4')
        cardNamePTag.textContent = data.cardName
        
        const cardHealthPTag = document.createElement('p')
        cardHealthPTag.classList.add('subtitle', 'is-6')
        cardHealthPTag.textContent = `Health: ${data.cardHealth}`

        const cardAttackValue = document.createElement('div')
        cardAttackValue.classList.add('content')
        cardAttackValue.textContent = `Attack: ${data.cardAttack}`

        cardImageFigure.append(cardImage)
        cardImageDiv.append(cardImageFigure)

        cardMediaContent.append(cardNamePTag, cardHealthPTag)
        cardMediaDiv.append(cardMediaContent)
        cardContentDiv.append(cardMediaDiv, cardAttackValue)

        parentCardDiv.append(cardImageDiv, cardContentDiv)

        gameView.append(parentCardDiv)
    })
}