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

export default async function drawCards(stageNum) {
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

  console.log(cardsArray)

  let handArr = [];

  // switch case statement for scaling cards
  switch(true) {
    case stageNum <= 2:
      for (let x = 0; x < 5; x += 1) {
        let randomNum = Math.floor(Math.random() * 15);
    
        handArr.push(cardsArray[randomNum]);
      }
      break;
    case stageNum >= 3 && stageNum <= 5:
      for (let x = 0; x < 5; x += 1) {
        let randomNum = 15 + Math.floor(Math.random() * 13);
    
        handArr.push(cardsArray[randomNum]);
      }
      break;
    case stageNum >= 6:
      for (let x = 0; x < 5; x += 1) {
        let randomNum = 27 + Math.floor(Math.random() * 15);
    
        handArr.push(cardsArray[randomNum]);
      }
      break;
    default:
      for (let x = 0; x < 5; x += 1) {
        let randomNum = Math.floor(Math.random() * 41);
    
        handArr.push(cardsArray[randomNum]);
      }
      break;
  }

  console.log(handArr)
  return handArr;
}
