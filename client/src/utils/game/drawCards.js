const mongoose = require('mongoose');

const allCards = () => {
    return fetch(`/api/cards`, {
        method: 'GET',
    });
}

export default drawCards = async () => {
  const cardsArray = await allCards();

  let handArr = [];
  for (let x = 0; x < 5; x += 1) {
    let randomNum = Math.floor(Math.random() * 14);

    handArr.push(cardsArray[randomNum]);
  }
  return handArr;
}
