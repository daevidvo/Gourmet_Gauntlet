// const mongoose = require('mongoose');

const allCards = async () => {
  try {
    const data = await fetch(`/api/cards/`, {
        method: 'GET',
    });
    console.log(data)

    return data
  } catch (err) {
    console.error(err)
  }
}

export default async function drawCards() {
  const cardsArray = await allCards();

  // console.log(cardsArray)

  let handArr = [];
  for (let x = 0; x < 5; x += 1) {
    let randomNum = Math.floor(Math.random() * 14);

    handArr.push(cardsArray[randomNum]);
  }

  // console.log(handArr)
  return handArr;
}
