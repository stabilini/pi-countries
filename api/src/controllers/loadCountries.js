const axios = require('axios');

const { Country } = require('../db.js');

// Llamamos una sola vez a la API externa y guardamos todos los paises en la BD
async function preloadCountries() {
  let test = await Country.findAll({});
  if (test.length === 0) {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(data => {
        let bulk = data.data.map(c => ({
          id: c.cca3,
          name: c.name.common,
          flag: c.flags.png,
          continent: c.continents[0],
          capital: c.capital ? c.capital[0] : 'n/d',
          subregion: c.subregion ? c.subregion : 'n/d',
          area: c.area >= 0 ? c.area : 0,
          population: c.population >= 0 ? c.population : 0
        }))
        Country.bulkCreate(bulk);
      })
      .then(console.log('Countries loaded from external API.'))
      .catch(error => {
        console.log(error);
      });
    }
  }

module.exports = { preloadCountries }