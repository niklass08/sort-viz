import SelectionSort from "./sorts/selectionSort.js";
import { generateRandomSequence } from "./utils.js";

const randomSequence = generateRandomSequence(5);
console.log(randomSequence);
const selectionSort = new SelectionSort(randomSequence);
for (let step of selectionSort.stepSort()) {
  console.log(step);
}
