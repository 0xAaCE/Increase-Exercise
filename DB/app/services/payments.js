const { payments: Payment } = require('../models');
const { databaseError } = require('../errors');

exports.createPayment = newPayment => {
  return Payment.create(newPayment).catch(error => {
    throw databaseError(error);
  });
};

exports.getAllPaymentsBy = where => {
  return Payment.findAll({ where }).catch(error => {
    throw databaseError(erro);
  });
};
