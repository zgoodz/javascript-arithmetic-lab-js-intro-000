function add(a, b) {
  var number = a+= b
  return number
}

function subtract(a, b) {
  var number = a -= b
  return number
}

function multiply(a, b) {
  var number = a *= b
  return number
}

function divide(a, b) {
  var number = a /= b
  return number
}

function increment(n) {
  n++
  return n
}

function decrement(n) {
  n--
  return n
}

function makeInt(n) {
  parseInt(n, 10)
  return n
}