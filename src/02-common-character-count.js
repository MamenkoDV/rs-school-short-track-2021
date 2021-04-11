/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1counter = {};
  const s2counter = {};
  const st1 = s1.split('');
  const st2 = s2.split('');
  /* eslint-disable-next-line */
  st1.forEach((element) => (s1counter[element] ? s1counter[element]++ : (s1counter[element] = 1)));
  /* eslint-disable-next-line */
  st2.forEach((element) => (s2counter[element] ? s2counter[element]++ : (s2counter[element] = 1)));
  let counter = 0;
  /* eslint-disable-next-line */
  for (const key of Object.keys(s1counter)) {
    if (s2counter[key]) {
      const quantity = s2counter[key] >= s1counter[key] ? s1counter[key] : s2counter[key];
      counter += quantity;
    }
  }
  return counter;
}

module.exports = getCommonCharacterCount;
