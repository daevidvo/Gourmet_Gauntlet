export default function drawCards(cardData) {
  let handArr = [];
  for (let x = 0; x < 5; x += 1) {
    let randomNum = Math.floor(Math.random() * 14);

    handArr.push(cardData[randomNum]);
  }
  return handArr;
}
