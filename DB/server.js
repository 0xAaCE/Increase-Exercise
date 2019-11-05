const app = require('./app'),
  logger = require('./app/logger'),
  { config } = require('./config');

const port = config.common.api.port || 8081;

Promise.resolve()
  .then(() => {
    app.listen(port);

    logger.info(`Listening on port: ${port}`);
  })
  .catch(logger.error);
