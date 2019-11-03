const { transactions: Transaction } = require('../models');
const { databaseError } = require('../errors');

exports.createTransaction = newTransaction => {
  return Transaction.create(newTransaction).catch(error => {
    throw databaseError(error);
  });
};

exports.getAllTransactionsBy = where => {
  return Transaction.findAll({ where }).catch(error => {
    throw databaseError(erro);
  });
};
