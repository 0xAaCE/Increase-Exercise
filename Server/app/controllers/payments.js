const { getPayments } = require('../services/payments');
const { info } = require('../logger');

exports.getPayments = ({ params: { clientId } }, res, next) => {
  info(`Attempt to get payments with clientId ${clientId}`);
  return getPayments(clientId)
    .then(payments => res.send(payments))
    .catch(next);
};
