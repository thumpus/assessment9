function unroll(squareArray) {
    const size = squareArray.length;
    const result = [];

    for (let i = 0; i < Math.floor(size / 2); i++) {
        let top = i;
        let left = i;
        let bottom = size - i - 1;
        let right = bottom;

    for (let x = left; x < right; x++) {
      result.push(squareArray[top][x]);
    }

    for (let y = top; y < bottom; y++) {
      result.push(squareArray[y][right])
    }

    for (let x = right; x > left; x--) {
      result.push(squareArray[bottom][x]);
    }

    for (let y = bottom; y > top; y--) {
      result.push(squareArray[y][left]);
    }
  }

  if (size % 2 !== 0) {
    let index = Math.floor(size/2);
    result.push(squareArray[index][index]);
  }

  return result;
}

module.exports = unroll;
