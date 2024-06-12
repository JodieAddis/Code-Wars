// 1. Convert string to uppercase:
export function makeUpperCase(str: string): string {
  return str.toUpperCase();
}

//2. Convert boolean to string:
export const booleanToString = (b: boolean): string => {
  return b.toString();
};

// 3. Caculate time between midnight and a hour given
export function past(h: number, m: number, s: number): number {
  //Convert into milliseconds
  const milliseconds = (
    hour: number,
    minute: number,
    second: number
  ): number => {
    return (hour * 3600 + minute * 60 + second) * 1000;
  };
  const currentTime: number = milliseconds(h, m, s);
  return currentTime;
}

//4. Remove first and last character
export function removeChar(str: string): string {
  if (str.length > 2) {
    const words: string[] = str.split("");
    const newString = words.slice(1, -1).join("");
    return newString;
  } else {
    return str;
  }
}

//5. Return the min and max number of an array (2 solutions)
export const min = (list: number[]): number => {
  return Math.min.apply(Math, list);
};
export const max = (list: number[]): number => {
  return Math.max.apply(Math, list);
};

// Autre méthode :
export const min2 = (list: number[]): number => {
  return Math.min(...list);
};
export const max2 = (list: number[]): number => {
  return Math.max(...list);
};

//6. Scores comparison
export function betterThanAverage(
  classPoints: number[],
  yourPoints: number
): boolean {
  const sumPoints = classPoints.reduce((a, b) => a + b, 0);
  const averagePoints = sumPoints / classPoints.length;

  return yourPoints > averagePoints;
}

//7. Counting sheep
export function countSheep(num: number): string {
  let result = "";
  for (let count = 1; count <= num; count++) {
    result += count + " sheep...";
  }
  return result;
}

//8. Calculate the sum of square number (2 solutions)
function square(num: number): number {
  return num * num;
}
export function squareSum(numbers: number[]): number {
  let squareNum = numbers.map((number) => square(number));
  let sumSquare: number = squareNum.reduce((a, b) => a + b, 0);
  return sumSquare;
}

//Autre méthode
export function squareSum2(numbers: number[]): number {
  return numbers.reduce((prev, curr) => prev + curr * curr, 0);
}

//9. Game "rock, paper and scissors" (2 solutions)
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

//other solution

const beats: { [index: string]: string } = {
  scissors: "paper",
  paper: "rock",
  rock: "scissors",
};
export function rps2(p1: string, p2: string): string {
  if (p1 === p2) return "Draw!";

  if (beats[p1] == p2) return "Player 1 won!";
  return "Player 2 won!";
}

//10. Build a function that returns an array of integers from n to 1 where n>0.
export const reverseSeq = (n: number): number[] => {
  let array = [];
  for (let i = n; i >= 1; i--) {
    array.push(i);
  }
  return array;
};
