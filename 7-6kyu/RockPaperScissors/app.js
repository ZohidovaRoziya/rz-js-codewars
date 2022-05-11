const rps = (p1, p2) => {
  if (p1 == "rock") {
    return `Player 1 won!`;
  } else if (p2 == "rock") {
    return `Player 2 won!`;
  } else if (p1 == "scissors") {
    return `Player 1 won!`;
  }
  else if (p2 == "scissors"){
    return `Player 2 won!`;
  } else if ( p1 == p2 )
  {
      return "Draw!"
  }
};
console.log(rps("rock", "scissors") );//  => `Player 1 won!`
// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!
