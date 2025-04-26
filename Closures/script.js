function getGame() {
  let score = 0;

  function increaseScr(points) {
    score += points;
    console.log(`The score gain by +${points} `);
  }
  function decreaseScr(points) {
    score -= points;
    console.log(`The score loose by -${points} `);
  }
  function getScore() {
    return score;
  }

return {increaseScr, decreaseScr, getScore}
  
}



let game = new getGame()
game.increaseScr(3);
game.decreaseScr(3);
console.log(game.getScore());