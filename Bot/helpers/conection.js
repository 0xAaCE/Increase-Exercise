const { get } = require('axios');

const { increaseApi: increase } = require('../config').config.common;
const { logger } = require('../logger');

exports.obtainRawData = () => {
  return get(`${increase.url}/file.txt`, { headers: { Authorization: increase.token } })
    .then(response => response.data)
    .catch(error => {
      logger.error(error.message);
      throw error;
    });
};
