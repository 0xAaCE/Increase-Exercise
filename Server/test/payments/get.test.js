const request = require('supertest');
const axios = require('axios');
const moment = require('moment');

const { createManyFakePayments } = require('../factory');
const app = require('../../app');

describe('Payment', () => {
  describe('GET /payments', () => {
    test('get success', done => {
      const fakePaymentsReceived = createManyFakePayments(8, {
        paymentDate: moment().subtract(2, 'days'),
        amountDiscounted: 1
      });
      const fakePaymetsToReceive = createManyFakePayments(3, {
        paymentDate: moment().add(2, 'days'),
        amountDiscounted: 1
      });
      axios.setMockPayments(fakePaymentsReceived);
      axios.setMockPayments(fakePaymetsToReceive);
      return request(app)
        .get('/clients/randomID/payments')
        .send()
        .then(res => {
          expect(res.error).toBe(false);
          expect(res.status).toBe(200);
          expect(res.body.received).toBe(8);
          expect(res.body.toReceive).toBe(3);
          done();
        });
    });
  });
});
