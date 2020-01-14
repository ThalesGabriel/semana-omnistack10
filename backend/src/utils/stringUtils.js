module.exports = function parseStringAsArray(arrayAsString) {
  return arrayAsString.split(',').map(tec => tec.trim());
}