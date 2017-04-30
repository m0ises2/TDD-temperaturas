let express = require('express');
let converter = require('..');

let app = express();

/*Rutas: */
app.get('/toCelsius', (req, res) => {
  let data = { result: converter.toCelsius(req.query.temp) };

  res.status(200).send(data);
});

app.get('/toFahrenheit', (req, res) => {
  let data = { result: converter.toFahrenheit(req.query.temp) };

  res.status(200).send(data);
});

app.listen(3000);
