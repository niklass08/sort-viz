export default class SelectionSort {
  constructor(arrayToSort) {
    this.arrayToSort = arrayToSort;
  }

  sort() {
    for (let i = 0; i < this.arrayToSort.length; i++) {
      let min = i;
      for (let j = i + 1; j < this.arrayToSort.length; j++) {
        if (this.arrayToSort[j] < this.arrayToSort[min]) {
          min = j;
        }
      }
      if (min !== i) {
        this.arrayToSort = this.swap(this.arrayToSort, i, min);
      }
    }
    return this.arrayToSort;
  }

  *stepSort() {
    for (let i = 0; i < this.arrayToSort.length; i++) {
      let min = i;
      for (let j = i + 1; j < this.arrayToSort.length; j++) {
        if (this.arrayToSort[j] < this.arrayToSort[min]) {
          min = j;
        }
      }
      if (min !== i) {
        yield (this.arrayToSort = this.swap(this.arrayToSort, i, min));
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
