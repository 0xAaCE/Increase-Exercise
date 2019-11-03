const request = require('supertest');
const { factory } = require('factory-girl');

const app = require('../../app');

describe('Transactions', () => {
  describe('POST /transactions', () => {
    test('create success', () => {
      return factory.attrs('transaction').then(fakeTransaction => {
        return request(app)
          .post('/transactions')
          .send(fakeTransaction)
          .then(res => {
            expect(res.error).toBe(false);
            expect(res.status).toBe(201);
          });
      });
    });
    test('create fails miss attr', () => {
      return factory.attrs('transaction', { clientId: undefined }).then(fakeTransaction => {
        return request(app)
          .post('/transactions')
          .send(fakeTransaction)
          .then(res => {
            expect(res.status).toBe(400);
            expect(res.body.message[0]).toBe("Transaction's client id attribute is missing");
          });
      });
    });
  });
});
