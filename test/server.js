let expect = require('chai').expect;
let converter = require('..');
let axios = require('axios');

describe('API de conversion de temperatura', () => {

  describe('de celsius a fahrenheit', () => {
    it('return status 200', (done) => {
      axios
        .get('http://localhost:3000/toFahrenheit?temp=100')
        .then( response => {
            let status = response.status;

            expect(status).to.equal(200);
            done();
        })
        .catch(err => {
            console.log(err);
        });
    });

    it('100 celsius a fahrenheit', (done) => {
      axios
        .get('http://localhost:3000/toFahrenheit?temp=100')
        .then( response => {
          let result = response.data.result;
          expect(result).to.equal(212);
          done();
        } )
        .catch( err => {
          console.log(err);
        })
    });
  })

  describe('de fahrenheit a celsius', () => {
    it('return status 200', (done) => {
      axios
        .get('http://localhost:3000/toCelsius?temp=212')
        .then( response => {
            let status = response.status;

            expect(status).to.equal(200);
            
            done();
        })
        .catch(err => {
            console.log(err);
        });
    });

    it('100 celsius a fahrenheit', (done) => {
      axios
        .get('http://localhost:3000/toCelsius?temp=212')
        .then( response => {
          let result = response.data.result;

          expect(result).to.equal(100);

          done();
        } )
        .catch( err => {
          console.log(err);
        })
    });
  })

})
