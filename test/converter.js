let expect = require('chai').expect;
let converter = require('..');

describe('Conversor de temperaturas', () => {
  describe('Conversion de celsius a Fahrenheit', () => {
    it('convierte 100 celsius to fahrenheit', () => {
      let result = converter.toFahrenheit(100);

      expect(result).to.equal(212);

    })
  })

  describe('Conversion de fahrenheit a celsius', () => {
    it('convierte 212 fahrenheit to celsius', () => {
      let result = converter.toCelsius(212);

      expect(result).to.equal(100);

    })
  })
});
