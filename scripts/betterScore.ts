export function betterThanAverage(
  classPoints: number[],
  yourPoints: number
): boolean {
  const sumPoints = classPoints.reduce((a, b) => a + b, 0);
  const averagePoints = sumPoints / classPoints.length;

  return yourPoints > averagePoints;
}
