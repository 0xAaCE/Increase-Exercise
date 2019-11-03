const request = require('supertest');
const { factory } = require('factory-girl');

const app = require('../../app');

describe('Payments', () => {
  describe('GET /payments', () => {
    test('get success', () => {
      return factory.createMany('payment', 5, { clientId: 'pepito' }).then(fakePaymentToPepito => {
        return factory.createMany('payment', 10, { clientId: 'juancito' }).then(fakePaymentToJuancito => {
          const fakePaymentsToPepitoId = fakePaymentToPepito.map(fakePayment => fakePayment.id);
          return request(app)
            .get('/payments?clientId=pepito')
            .send()
            .then(resPepito => {
              expect(resPepito.error).toBe(false);
              expect(resPepito.status).toBe(200);
              resPepito.body.forEach(paymentToPepito => {
                expect(fakePaymentsToPepitoId).toContain(paymentToPepito.id);
                Object.keys(fakePaymentToPepito[0].dataValues).forEach(key =>
                  expect(paymentToPepito).toHaveProperty(key)
                );
              });
              expect(resPepito.body.length).toBe(5);
            });
        });
      });
    });
  });
});
