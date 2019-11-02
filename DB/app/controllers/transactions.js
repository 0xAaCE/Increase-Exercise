const { createTransaction, getAllTransactionsBy } = require('../services/transactions');
const { cleanProperties } = require('../helpers/properties');
const { transactionSchema } = require('../schemas/transactions');
const { info } = require('../logger');

exports.createTransaction = ({ body }, res, next) => {
  info(`Attemp to create a transaction with id ${body.id}`);
  const transaction = cleanProperties(body, transactionSchema);
  return createTransaction(transaction)
    .then(() => res.status(201).end())
    .catch(next);
};

exports.getAllTransactions = ({ query: filters }, res, next) => {
  info(`Attempt to get all transactions with filters ${filters}`);
  return getAllTransactionsBy(filters)
    .then(transactions => res.send(transactions))
    .catch(next);
};
