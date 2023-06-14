// const mongoose = require('mongoose');

const allCards = async () => {
  try {
    const data = await fetch(`/api/cards/`, {
        method: 'GET',
    });

    return data
  } catch (err) {
    console.error(err)
  }
}

export default async function drawCards() {
  const response = await allCards();
  let cardsArray = await response.json()

  // bubblesort cards based on attack+health total
  for (let x=0; x<cardsArray.length;x+=1){
    for (let z=0; z<cardsArray.length;z+=1){
      if ((Number(cardsArray[x].cardHealth) + Number(cardsArray[x].cardAttack)) < (Number(cardsArray[z].cardHealth) + Number(cardsArray[z].cardAttack))) {
        let temp = cardsArray[z]
        cardsArray[z] = cardsArray[x]
        cardsArray[x] = temp
      }
    }
  }

  return cardsArray
}
