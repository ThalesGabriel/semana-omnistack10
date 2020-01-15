var StringUtils = (function(){

  return {
      parseStringAsArray: function (arrayAsString) { return arrayAsString.split(',').map(tec => tec.trim()); },
  }
 
 }())

module.exports = StringUtils;