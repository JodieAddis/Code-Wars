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
