import QuickSort from "./src/sorts/QuickSort.js";
import { generateRandomSequence } from "./src/utils.js";

const randomSequence = generateRandomSequence(5);
console.log(randomSequence);
const quickSort = new QuickSort(randomSequence);
console.log(
  quickSort.sort(quickSort.arrayToSort, 0, quickSort.arrayToSort.length - 1)
);
