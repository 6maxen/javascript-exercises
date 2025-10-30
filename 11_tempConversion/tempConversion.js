const convertToCelsius = function(fahrenheit) {
  result = Math.round(10*((fahrenheit-32)*(5/9))) / 10;
  return result;
};

const convertToFahrenheit = function(celcius) {
  result = Math.round(10*((celcius*(9/5))+32)) / 10;
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
