/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const filtered = arr.filter((element) => element !== -1);
  const sorted = filtered.sort((a, b) => a - b);
  const result = arr.map((element) => (element === -1 ? element : sorted.shift()));

  return result;
}

module.exports = sortByHeight;
