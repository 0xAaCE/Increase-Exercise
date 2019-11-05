const { get, post } = require('axios');

const { increaseApi: increase, databaseApi: db } = require('../config').config.common;
const { logger } = require('../logger');
const { asyncForEach, waitFor } = require('./utils');

exports.obtainRawData = () => {
  logger.info('Attempt to obtain raw data');
  return get(`${increase.url}/file.txt`, { headers: { Authorization: increase.token } })
    .then(response => response.data)
    .catch(error => {
      logger.error(error.message);
      throw error;
    });
};

exports.sendTransactions = transactions => {
  logger.info('Attempt to send transactions');
  return asyncForEach(transactions, async transaction => {
    await waitFor(50);
    return post(`${db.url}/transactions`, transaction).catch(error => {
      logger.error(error.message);
    });
  });
};

exports.sendPayment = payment => {
  logger.info('Attempt to send payment');
  return post(`${db.url}/payments`, payment).catch(error => {
    logger.error(error.message);
  });
};
