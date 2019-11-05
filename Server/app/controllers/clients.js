const { getClient } = require('../services/clients');
const { info } = require('../logger');

exports.getClient = ({ params: { id } }, res, next) => {
  info(`Attempt to get client with id ${id}`);
  return getClient(id)
    .then(client => res.send(client))
    .catch(next);
};
