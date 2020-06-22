export default class BubbleSort {
  constructor(arrayToSort) {
    this.arrayToSort = arrayToSort;
  }

  *stepSort() {
    for (let i = this.arrayToSort.length; i > 1; i--) {
      for (let j = 0; j < i; j++) {
        if (this.arrayToSort[j + 1] < this.arrayToSort[j]) {
          yield (this.arrayToSort = this.swap(this.arrayToSort, j + 1, j));
        }
      }
    }
  }

  swap(array, i, j) {
    let temp = this.arrayToSort.slice();
    temp[i] = this.arrayToSort[j];
    temp[j] = this.arrayToSort[i];
    return temp;
  }
}
