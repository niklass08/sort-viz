export default class MergeSort {
  constructor(arrayToSort) {
    this.arrayToSort = arrayToSort;
  }

  fusion(a, b, depth) {
    if (a.length === 0) {
      return b;
    }
    if (b.length === 0) {
      return a;
    }
    if (a[0] <= b[0]) {
      return [a.shift(), ...this.fusion(a, b)];
    } else {
      return [b.shift(), ...this.fusion(a, b)];
    }
  }

  sort(array, depth = 0, maxDepth) {
    const n = array.length;
    const bound = Math.floor(n / 2);
    if (n <= 1 || (maxDepth !== undefined && depth === maxDepth)) {
      return array;
    } else {
      return this.fusion(
        this.sort(array.slice(0, bound), depth + 1, maxDepth),
        this.sort(array.slice(bound, n), depth + 1, maxDepth)
      );
    }
  }

  _getMaxDepth(array) {
    let i = array.length;
    let count = 1;
    while (i > 2) {
      i = Math.floor(i / 2);
      count++;
    }
    return count;
  }

  *stepSort(array = this.arrayToSort) {
    let maxDepth = this._getMaxDepth(array);
    for (let i = 0; i < maxDepth; i++) {
      yield this.sort(array, 0, i + 1);
    }
  }
}
