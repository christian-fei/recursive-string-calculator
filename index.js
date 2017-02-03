module.exports = stringOfNumbers => {
  if (containsSingleNumber(stringOfNumbers)) {
    return parseInt(stringOfNumbers)
  }
  if (containsTwoNumbers(stringOfNumbers)) {
    const [_, first, second, __] = stringOfNumbers.match(/^(\d+),(\d+)$/)
    return parseInt(first) + parseInt(second)
  }
  return 0
}

/* containsSingleNumber :: string -> boolean */
function containsSingleNumber (stringOfNumbers) {
  return /^\d+$/.test(stringOfNumbers)
}

/* containsSingleNumber :: string -> boolean */
function containsTwoNumbers (stringOfNumbers) {
  return /^(\d+),(\d+)$/.test(stringOfNumbers)
}