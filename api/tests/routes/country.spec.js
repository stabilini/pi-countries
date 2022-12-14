/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const request = require('supertest');
const app = require('../../src/app.js');
const { Country, conn } = require('../../src/db.js');

const country = {
  name: 'Argentina',
  id: 'ARG',
  flag: 'https://flagcdn.com/w320/ar.png',
  capital: 'Buenos Aires',
  continent: 'South America',
  subregion: 'South America',
  area: 2780400,
  population: 45376763
};

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  before(() => Country.sync({ force: true })
    .then(() => Country.create(country)));
  
  describe('GET all countries', () => {
    it('should get 200 when getting all countries', async () => {
      const res = await request(app).get('/countries');
      expect(res.statusCode).to.eql(200);
    });
    it('the response should be an array', async () => {
      const res = await request(app).get('/countries');
      expect(res.body.data).to.be.an('array');
    });
  })
  describe('GET country by params', () => {
    it('should get 200 when requesting a country by ID', async () => {
      const res = await request(app).get('/countries/ARG');
      expect(res.statusCode).to.eql(200);
    });
    it('should get 200 when country does not exist', async () => {
      const res = await request(app).get('/countries/ZZZ');
      expect(res.statusCode).to.eql(200);
    });
    it('should get -No country with that ID.- msg', async () => {
      const res = await request(app).get('/countries/ZZZ');
      expect(res.body.msg).to.eql('No country with that ID.');
    });
    it('should get -Invalid ID length.- msg if more than 3 letters in params', async () => {
      const res = await request(app).get('/countries/ZZZZ');
      expect(res.body.msg).to.eql('Invalid ID length.');
    });
  });
  describe('GET country by query', () => {
    it('should get 200 when requesting a country by partial query name', async () => {
      const res = await request(app).get('/countries?name=arg');
      expect(res.statusCode).to.eql(200);
    });
    it('should get 200 when country does not exist', async () => {
      const res = await request(app).get('/countries?name=zzz');
      expect(res.statusCode).to.eql(200);
    });
    it('should get -No countries.- msg', async () => {
      const res = await request(app).get('/countries?name=zzz');
      expect(res.body.msg).to.eql('No countries.');
    });
  });
});