const { getTransactions } = require('../services/transactions');
const { info } = require('../logger');

exports.getTransactions = ({ params: { clientId } }, res, next) => {
  info(`Attempt to get transaction with clientId ${clientId}`);
  return getTransactions(clientId)
    .then(transactions => res.send(transactions))
    .catch(next);
};
