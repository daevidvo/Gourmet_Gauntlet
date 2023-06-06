import playButton from "./playButton"
import drawCards from "./drawCards"


export default async function playGame() {
    let game = true
    await new Promise(sleep => setTimeout(sleep,2000))

    const gameView = document.getElementById('battle')

    playButton();

    let handArr = await drawCards();

    console.log(handArr)







    // while (game === true) {
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // }
    // document.getElementById('endGameButton').addEventListener('click', function () {
    //     game = false
    // })
}