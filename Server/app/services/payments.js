const { get } = require('axios');
const { databaseApi: db } = require('../../config').config.common;
const { conectionError } = require('../errors');

exports.getPayments = clientId => {
  return get(`${db.url}/payments?clientId=${clientId}`)
    .then(response => response.data)
    .catch(error => {
      throw conectionError(error.message);
    });
};
