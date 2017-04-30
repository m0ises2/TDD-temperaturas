function toFahrenheit(/*temperatura en celsius*/ temp) {
  return temp * 1.8 + 32;
}

function toCelsius(/*emperatura en fahrenheit*/ temp) {
  return (temp - 32) / 1.8;
}

/*Exportamos un objeto con las funciones definidas previamente :D*/
module.exports = {toFahrenheit, toCelsius};
