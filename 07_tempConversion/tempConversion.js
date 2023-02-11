const convertToCelsius = function(fahrTemp) {

  celcTemp = (fahrTemp - 32) * .5556; 
  celcTemp = +celcTemp.toFixed(1);  // Note the plus sign drops any "extra" zeroes at the end. e.g instead of 1.0, it will just return 1

  return celcTemp;
};

const convertToFahrenheit = function(celcTemp) {

  fahrTemp = (celcTemp * 1.8) + 32;
  fahrTemp = +fahrTemp.toFixed(1);

  return fahrTemp;
};

//convertToCelsius(-100);
convertToFahrenheit(-10);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
