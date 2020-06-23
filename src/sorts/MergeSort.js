export default class MergeSort {
  constructor(arrayToSort) {
    this.arrayToSort = arrayToSort;
  }

  fusion(a, b) {
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

  sort(array) {
    const n = array.length;
    const bound = Math.floor(n / 2);
    if (n <= 1) {
      return array;
    } else {
      return this.fusion(
        this.sort(array.slice(0, bound)),
        this.sort(array.slice(bound, n))
      );
    }
  }
}
