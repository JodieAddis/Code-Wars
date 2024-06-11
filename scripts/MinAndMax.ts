export const min = (list: number[]): number => {
  return Math.min.apply(Math, list);
};

export const max = (list: number[]): number => {
  return Math.max.apply(Math, list);
};

// Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.

// _______________________________________________
//Autre méthode :
// export const min = (list: number[]): number => {
//     return Math.min(...list);
//   };

//   export const max = (list: number[]): number => {
//     return Math.max(...list);
//   };
