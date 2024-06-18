//1. make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

export function descendingOrder(n: number): number {
  const sortNumber = (a: number) =>
    Number([...("" + a)].sort().reverse().join(""));
  //   " " + a convertit le nombre a en une chaîne de caractères.
  // [...] est utilisé pour séparer chaque caractère de la chaîne de caractères en un   tableau. Cela crée un tableau où chaque élément est un chiffre individuel du nombre a.
  // Number() convertit la chaîne de caractères obtenue précédemment en un nombre.
  // sort() trie les éléments d'un tableau en place et renvoie le tableau trié.
  // reverse() inverse l'ordre des éléments dans un tableau en place.
  //  join() crée et renvoie une nouvelle chaîne en concaténant tous les éléments d'un tableau, séparés par un séparateur spécifié
  return sortNumber(n);
}
//other solution
export function descendingOrderTwo(n: number): number {
  return parseInt((n + "").split("").sort().reverse().join(""));
}

//2. Square every digit of a number and concatenate them.
export class Kata {
  static squareDigits(num: number): number {
    return Number(
      num
        .toString()
        .split("")
        .map((digit) => Math.pow(parseInt(digit), 2))
        .join("")
    );
  }
}

//3.Check that the color code respects the range a-m + return the error ratio
export function printerError(s: string): string {
  let code = s.toLowerCase().split("");

  let alphabet = /^[a-z]*$/;
  let interval = /^[a-m]*$/;

  let totalCount = 0;
  let errorCount = 0;

  if (code.length >= 1 && alphabet.test(s.toLowerCase())) {
    totalCount = code.length;
    const codeMatching = code.filter((letter) => !interval.test(letter));
    errorCount += codeMatching.length;
  } else {
    return "error";
  }
  return `${errorCount}/${totalCount}`;
}

// Code optimisé
export function printerErrorTwo(s: string): string {
  const lowerCaseString = s.toLowerCase();

  const alphabet = /^[a-z]*$/;
  const interval = /^[a-m]*$/;

  if (lowerCaseString.length >= 1 && alphabet.test(lowerCaseString)) {
    let errorCount = 0;
    const totalCount = lowerCaseString.length;

    for (let i = 0; i < totalCount; i++) {
      if (!interval.test(lowerCaseString[i])) {
        errorCount++;
      }
    }
    return `${errorCount}/${totalCount}`;
  } else {
    return "error";
  }
}

// 4. Simple, given a string of words, return the length of the shortest word(s)
export function findShort(s: string): number {
  const words = s.split(" ");
  const shortestWord = words.reduce((shortestWord, currentWord) => {
    return currentWord.length < shortestWord.length
      ? currentWord
      : shortestWord;
  });
  return shortestWord.length;
}

// Autre solution
export function findShortTwo(s: string): number {
  return Math.min(...s.split(" ").map((w) => w.length));
}

// 5. Remove vowels
export class KataTrolls {
  static disemvowel(str: string): string {
    return str.replace(/[aeiouAEIOU]/g, "");
  }
}

// 6. Function which returns true if the first argument(string) passed in ends with the 2nd argument (also a string)
export function solution(str: string, ending: string): boolean {
  return str.endsWith(ending) ? true : false;
  //using endsWith() method
}

// 7. Return the highest and lowest number from string input
export class KataNumb {
  static highAndLow(numbers: string): string {
    const arrNumber = numbers.split(" ").map(Number);

    const min = Math.min(...arrNumber);
    const max = Math.max(...arrNumber);

    return `${max} ${min}`;
  }
}

// 8. Reverse DNA sequence
export class KataDna {
  static dnaStrand(dna: string): string {
    let reverse = [];
    for (let i = 0; i < dna.length; i++) {
      switch (dna[i]) {
        case "C":
          reverse.push("G");
          break;
        case "G":
          reverse.push("C");
          break;
        case "A":
          reverse.push("T");
          break;
        case "T":
          reverse.push("A");
          break;
      }
    }
    return reverse.join("");
  }
}
//Autre solution avec la méthode match():
export class KataDnaTwo {
  static dnaStrand(dna: string): string {
    const match = {
      A: "T",
      T: "A",
      G: "C",
      C: "G",
    };
    return Array.from(dna, (v) => match[v]).join("");
  }
}

// 9. Counting the number of vowels
export class KataVowels {
  static getCount(str: string): number {
    let count = 0;
    let vowels = /^[aeiou]$/i;

    for (let vowel of str) {
      if (vowels.test(vowel)) {
        count++;
      }
    }
    return count;
  }
}
