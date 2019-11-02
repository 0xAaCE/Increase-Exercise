const factory = require('factory-girl').factory;
const chance = require('chance')();

const { paymetns: Payment, transactions: Transaction } = require('../app/models');

factory.define('payment', Payment, {
  id: factory.sequence('Payment.id', n => `${chance.string({ length: 31 })}${n}`),
  clientId: factory.chance('string', { length: 32 }),
  currency: 'ARS',
  totalAmount: factory.chance('integer', { min: 0 }),
  totalDicount: factory.chance('integer', { min: 0 }),
  amountDiscounted: factory.chance('integer', { min: 0 }),
  paymentDate: factory.chance('date')
});

factory.define('transaction', Transaction, {
  id: factory.sequence('Payment.id', n => `${chance.string({ length: 31 })}${n}`),
  clientId: factory.chance('string', { length: 32 }),
  amount: factory.chance('integer', { min: 0 }),
  approved: factory.chance('bool')
});
