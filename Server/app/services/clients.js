const { get } = require('axios');
const { increaseApi: increase } = require('../../config').config.common;
const { conectionError } = require('../errors');

exports.getClient = id => {
  return get(`${increase.url}/clients/${id}`, { headers: { Authorization: increase.token } })
    .then(response => response.data)
    .catch(error => {
      throw conectionError(error.message);
    });
};
