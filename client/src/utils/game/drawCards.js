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

  let handArr = [];
  for (let x = 0; x < 5; x += 1) {
    let randomNum = Math.floor(Math.random() * 42);

    handArr.push(cardsArray[randomNum]);
  }

  // console.log(handArr)
  return handArr;
}
