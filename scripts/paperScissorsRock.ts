export function rps(p1: string, p2: string): string {
  let scissors: string = "scissors";
  let paper: string = "paper";
  let rock: string = "rock";

  if (p1 === p2) return "Draw!";

  switch (p1) {
    case "scissors":
      if (p2 === rock) return "Player 2 won!";
      break;
    case "paper":
      if (p2 === scissors) return "Player 2 won!";
      break;
    case "rock":
      if (p2 === paper) return "Player 2 won!";
      break;
    default:
      return "Invalid choice for player 1";
  }

  return "Player 1 won!";
}

//Autre manière de faire
// const beats: {[index: string]: string} = {
//     'scissors': 'paper',
//     'paper': 'rock',
//     'rock': 'scissors',
//   }

//   export function rps(p1: string, p2: string): string{
//     if (p1 === p2) return 'Draw!'

//     if (beats[p1] == p2) return 'Player 1 won!'
//     return 'Player 2 won!'
//   }
