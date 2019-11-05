const request = require('supertest');
const axios = require('axios');

const { createManyFakeTransactions } = require('../factory');
const app = require('../../app');

describe('Transactions', () => {
  describe('GET /transactions', () => {
    test('get success', done => {
      const fakeTransactions = createManyFakeTransactions(5);
      axios.setMockTransactions(fakeTransactions);
      return request(app)
        .get('/clients/randomID/transactions')
        .send()
        .then(res => {
          expect(res.error).toBe(false);
          expect(res.status).toBe(200);
          res.body.forEach(transaction => {
            Object.keys(fakeTransactions[0]).forEach(key => expect(transaction).toHaveProperty(key));
          });
          done();
        });
    });
  });
});
