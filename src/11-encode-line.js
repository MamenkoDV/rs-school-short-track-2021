/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let count = 1;
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    const nextElement = str[index + 1];
    if (element === nextElement) {
      count++;
      /* eslint-disable-next-line */
      continue;
    }
    if (count > 1) {
      result += count;
      count = 1;
    }
    result += element;
  }
  return result;
}

module.exports = encodeLine;
