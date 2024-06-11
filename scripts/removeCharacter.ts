export function removeChar(str: string): string {
  if (str.length > 2) {
    const words: string[] = str.split("");
    const newString = words.slice(1, -1).join("");
    return newString;
  } else {
    return str;
  }
}
