const request = require('supertest');
const { factory } = require('factory-girl');

const app = require('../../app');

describe('Payments', () => {
  describe('POST /payments', () => {
    test('create success', () => {
      return factory.attrs('payment').then(fakePayment => {
        return request(app)
          .post('/payments')
          .send(fakePayment)
          .then(res => {
            expect(res.error).toBe(false);
            expect(res.status).toBe(201);
          });
      });
    });
    test('create fails miss attr', () => {
      return factory.attrs('payment', { clientId: undefined }).then(fakePayment => {
        return request(app)
          .post('/payments')
          .send(fakePayment)
          .then(res => {
            expect(res.status).toBe(400);
            expect(res.body.message[0]).toBe("Payment's client id attribute is missing");
          });
      });
    });
  });
});
