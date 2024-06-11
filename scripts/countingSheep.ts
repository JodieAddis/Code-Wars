//Ma solution
export function countSheep(num: number): string {
  let result = "";

  for (let count = 1; count <= num; count++) {
    result += count + " sheep...";
  }

  return result;
}
