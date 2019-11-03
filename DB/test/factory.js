const { factory } = require('factory-girl');
const chance = require('chance')();

const { payments: Payment, transactions: Transaction } = require('../app/models');

factory.define('payment', Payment, {
  id: factory.sequence('Payment.id', n => `${chance.string({ length: 31, pool: 'qwertyuioasdfghjk' })}${n}`),
  clientId: factory.chance('string', { length: 32, pool: 'qwertyuioasdfghjk' }),
  currency: 'ARS',
  totalAmount: factory.chance('integer', { min: 0, max: 10000 }),
  totalDiscount: factory.chance('integer', { min: 0, max: 10000 }),
  amountDiscounted: factory.chance('integer', { min: 0, max: 10000 }),
  paymentDate: factory.chance('date')
});

factory.define('transaction', Transaction, {
  id: factory.sequence('Payment.id', n => `${chance.string({ length: 31 })}${n}`),
  clientId: factory.chance('string', { length: 32 }),
  amount: factory.chance('integer', { min: 0 }),
  approved: factory.chance('bool')
});
