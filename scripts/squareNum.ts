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
