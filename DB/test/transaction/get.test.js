const request = require('supertest');
const { factory } = require('factory-girl');

const app = require('../../app');

describe('Transcations', () => {
  describe('GET /transactions', () => {
    test('get success', () => {
      return factory.createMany('transaction', 5, { clientId: 'pepito' }).then(fakeTransactionsPepito => {
        return factory
          .createMany('transaction', 10, { clientId: 'juancito' })
          .then(fakeTransactionsJuancito => {
            const fakeTransactionPepitoId = fakeTransactionsPepito.map(fakePayment => fakePayment.id);
            return request(app)
              .get('/transactions?clientId=pepito')
              .send()
              .then(resPepito => {
                expect(resPepito.error).toBe(false);
                expect(resPepito.status).toBe(200);
                resPepito.body.forEach(transactionPepito => {
                  expect(fakeTransactionPepitoId).toContain(transactionPepito.id);
                  Object.keys(fakeTransactionsPepito[0].dataValues).forEach(key =>
                    expect(transactionPepito).toHaveProperty(key)
                  );
                });
                expect(resPepito.body.length).toBe(5);
              });
          });
      });
    });
  });
});
