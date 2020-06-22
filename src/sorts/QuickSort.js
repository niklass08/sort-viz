export default class QuickSort {
  constructor(arrayToSort) {
    this.arrayToSort = arrayToSort;
  }

  swap(array, i, j) {
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }

  sort(array = this.arrayToSort, low = 0, high = this.arrayToSort.length - 1) {
    if (array.length > 1 && low < high) {
      let index = this.partition(array, low, high);
      if (low < index - 1) {
        this.sort(
          array,
          low,
          index - 1
        );
      }

      if (high > index) {
        this.sort(
          array,
          index + 1,
          high
        );
      }

      return array;
    } else {
      return array;
    }
  }

  *stepSort(array = this.arrayToSort, low = 0, high = this.arrayToSort.length - 1) {
    if (array.length > 1 && low < high) {
      // let index = this.partition(array, low, high);
      for (let element of this._genPartition(array, low, high)) {
        if (element.length) {
          yield element;
        } else {
          var index = element;
        }
      }
      yield array;
      if (low < index - 1) {
        for (let step of this.stepSort(array, low, index - 1)) {
          yield step;
        }
      }

      if (high > index) {
        for (let step of this.stepSort(array, index + 1, high)) {
          yield step;
        }
      }
      yield array;
    }
  }

  partition(array, low, high) {
    let pivot = array[high];
    let i = low;
    for (let j = low; j < high; j++) {
      if (array[j] < pivot) {
        this.swap(array, i, j);
        i += 1;
      }
    }
    this.swap(array, i, high);
    return i;
  }

  *_genPartition(array, low, high) {
    let pivot = array[high];
    let i = low;
    for (let j = low; j < high; j++) {
      if (array[j] < pivot) {
        this.swap(array, i, j);
        yield array
        i += 1;
      }
    }
    this.swap(array, i, high);
    yield array;
    yield i;
  }
}
