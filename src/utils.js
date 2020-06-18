export function generateRandomSequence(length) {
  let sequence = [];
  for (let i = 0; i < length; i++) {
    sequence.push(i);
  }

  return shuffle(sequence);
}

// http://stackoverflow.com/questions/962802#962890
function shuffle(array) {
  var tmp,
    current,
    top = array.length;
  if (top)
    while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
  return array;
}
