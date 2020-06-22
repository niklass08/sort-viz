import QuickSort from "./src/sorts/QuickSort.js";
import { generateRandomSequence } from "./src/utils.js";

const randomSequence = generateRandomSequence(15);
console.log(randomSequence);
const quickSort = new QuickSort(randomSequence);

console.log(
  quickSort.sort()
);
