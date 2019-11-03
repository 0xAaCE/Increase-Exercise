const { checkSchema } = require('express-validator');

const { healthCheck } = require('./controllers/healthCheck');
const { createPayment, getAllPayments } = require('./controllers/payments');
const { createTransaction, getAllTransactions } = require('./controllers/transactions');
const { validateSchemas } = require('./middlewares/schemas');
const { paymentSchema } = require('./schemas/payments');
const { transactionSchema } = require('./schemas/transactions');

exports.init = app => {
  app.get('/health', healthCheck);

  app.get('/transactions', getAllTransactions);
  app.post('/transactions', [checkSchema(transactionSchema), validateSchemas], createTransaction);

  app.get('/payments', getAllPayments);
  app.post('/payments', [checkSchema(paymentSchema), validateSchemas], createPayment);
};
