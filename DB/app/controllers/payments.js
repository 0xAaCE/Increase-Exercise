const moment = require('moment');

const { createPayment, getAllPaymentsBy } = require('../services/payments');
const { cleanProperties } = require('../helpers/properties');
const { paymentSchema } = require('../schemas/payments');
const { info } = require('../logger');

exports.createPayment = ({ body }, res, next) => {
  info(`Attemp to create a payment with id ${body.id}`);
  const payment = { ...cleanProperties(body, paymentSchema), paymentDate: moment(body.paymentDate) };
  return createPayment(payment)
    .then(() => res.status(201).end())
    .catch(next);
};

exports.getAllPayments = ({ query: filters }, res, next) => {
  info(`Attempt to get all payments with filters ${filters}`);
  return getAllPaymentsBy(filters)
    .then(payments => res.send(payments))
    .catch(next);
};
