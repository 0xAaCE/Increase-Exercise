const { get } = require('axios');
const { databaseApi: db } = require('../../config').config.common;
const { conectionError } = require('../errors');

exports.getTransactions = clientId => {
  return get(`${db.url}/transactions?clientId=${clientId}`)
    .then(response => response.data)
    .catch(error => {
      throw conectionError(error.message);
    });
};
