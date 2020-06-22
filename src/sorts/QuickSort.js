export default class QuickSort {
  constructor(arrayToSort) {
    this.arrayToSort = arrayToSort;
  }

  swap(array, i, j) {
    let clone = array.slice();
    clone[i] = array[j];
    clone[j] = array[i];
    return clone;
  }

  sort(array, low, high) {
    let clone = array.slice();
    if (clone.length > 1 && low < high) {
      let partitionResult = this.partition(clone, low, high);
      var firstHalf = this.sort(
        partitionResult.array,
        low,
        partitionResult.index - 1
      );
      var secondHalf = this.sort(
        partitionResult.array,
        partitionResult.index + 1,
        high
      );
      return [...firstHalf, ...secondHalf];
    } else {
      return clone;
    }
  }

  partition(array, low, high) {
    let clone = array.slice();
    let pivot = clone[high];
    let i = low;
    for (let j = low; j < high; j++) {
      if (clone[j] < pivot) {
        clone = this.swap(clone, i, j);
        i += 1;
      }
    }
    clone = this.swap(clone, i, high);
    return { array: clone, index: i };
  }
}
