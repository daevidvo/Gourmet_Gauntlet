export default function generatePlayerHand(stageNum, cardsArray) {
  let handArr = [];
  switch (true) {
    case stageNum <= 3:
      for (let x = 0; x < 5; x += 1) {
        let randomNum = Math.floor(Math.random() * 22);

        handArr.push(cardsArray[randomNum]);
      }
      break;
    case stageNum >= 3 && stageNum <= 5:
      for (let x = 0; x < 5; x += 1) {
        let randomNum = 22 + Math.floor(Math.random() * 10);

        handArr.push(cardsArray[randomNum]);
      }
      break;
    case stageNum >= 6:
      for (let x = 0; x < 5; x += 1) {
        let randomNum = 31 + Math.floor(Math.random() * 10);

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

  console.log(handArr);
  return handArr;
}
