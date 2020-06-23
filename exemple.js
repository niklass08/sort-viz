import MergeSort from "./src/sorts/MergeSort.js";
import { generateRandomSequence } from "./src/utils.js";

const randomSequence = generateRandomSequence(15);
console.log(randomSequence);
const mergeSort = new MergeSort(randomSequence);

console.log(mergeSort.sort(mergeSort.arrayToSort));
