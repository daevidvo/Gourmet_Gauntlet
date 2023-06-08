export default function deleteGameButton() {
  // removes the fields from the battlefield
  let elementsToRemove = document.querySelectorAll(".is-flex");
  elementsToRemove.forEach((element) => {
    element.remove();
  });

  // removes the game function buttons
  elementsToRemove = document.getElementById("roundStartButton");
  elementsToRemove.remove();
  elementsToRemove = document.getElementById("endGameButton");
  elementsToRemove.remove();
  elementsToRemove = document.getElementById("playerHealth");
  elementsToRemove.remove();
}
