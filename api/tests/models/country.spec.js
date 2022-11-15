const { expect } = require('chai');
const { Country, conn } = require('../../src/db.js');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should throw an error if ID is invalid', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ });
      });
    });
  });
});

// describe('Country model', () => {
//   before(() => conn.authenticate()
//     .catch((err) => {
//       console.error('Unable to connect to the database:', err);
//     }));

//   describe('Validators', () => {
//     before(() => Country.sync({ force: true }));
    
//     describe('name', () => {
//       it('should throw an error if name is null', async (done) => {
//         expect.assertions(1);
//         return Country.create({ id: 'ARG' }).catch(e => {
//           expect(e).toMatch('Rejected Promise')
//         });
//         // expect.assertions(1);
//         // try {
//         //   await Country.create({ id: 'ARG' });
//         // } catch (error) {
//         //   expect(error).toBeDefined();
//         // }
//         // Country.create({ name: 'Argentina' })
//         //   .then(() => done(new Error('It requires a valid name')))
//         //   .catch(() => done());
//       });
//       // it('should work when its a valid name', () => {
//       //   Country.create({ name: 'Argentina' });
//       // });
//     });
//   });
// });
