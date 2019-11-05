const { healthCheck } = require('./controllers/healthCheck');
const { getPayments } = require('./controllers/payments');
const { getTransactions } = require('./controllers/transactions');
const { getClient } = require('./controllers/clients');

exports.init = app => {
  app.get('/health', healthCheck);

  app.get('/clients/:clientId/transactions', getTransactions);
  app.get('/clients/:clientId/payments', getPayments);
  app.get('/clients/:id', getClient);
};
