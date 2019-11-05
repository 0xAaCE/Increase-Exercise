const { getPayments } = require('../services/payments');
const { info } = require('../logger');
const { sum } = require('../helpers/payments');

exports.getPayments = ({ params: { clientId } }, res, next) => {
  info(`Attempt to get payments with clientId ${clientId}`);
  return getPayments(clientId)
    .then(payments => res.send(sum(payments)))
    .catch(next);
};
