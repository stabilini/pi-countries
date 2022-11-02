const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const axios = require('axios');

const { Country, Activity } = require('./db.js');

require('./db.js');

const server = express();

server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// obtiene los datos de la API y los guarda en la DB, solo se ejecuta al levantar el back
// VER FRANCO 12 REACT REDUX 46.33 DEL LECTURE QUE EXPLICA ALGO DE AXIOS (para sacar el let countries = data.data)
axios
  .get('https://restcountries.com/v3/all')
  .then(data => {
    let countries = data.data;

    // CAMBIAR A UN BULK CREATE SIN HACER EL FOR
    function firstCountryLoad() {
      for (let i = 0; i < countries.length; i++) {
        Country.create({
          id: countries[i].cca3,
          name: countries[i].name.common,
          flag: countries[i].flags,
          continent: countries[i].continents[0],
          capital: countries[i].capital ? countries[i].capital : [],
          subregion: countries[i].subregion,
          area: countries[i].area,
          population: countries[i].population,
        });
      }
    }
    firstCountryLoad();
  })
  .then(console.log('countries cargados'))
  // BORRAR ESTE THEN CUANDO FUNCIONE TODO
  .then(() => {
    const ejemplos = require('../activities.json');
    Activity.bulkCreate(ejemplos);
    }
  )
  .then(console.log('Actividades de prueba creadas'))
  .catch(error => {
    console.log(error);
  });

server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
