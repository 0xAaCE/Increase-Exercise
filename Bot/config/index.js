const ENVIRONMENT = process.env.NODE_ENV || 'development';

if (ENVIRONMENT !== 'production') {
  require('dotenv').config();
}

exports.config = {
  environment: ENVIRONMENT,
  isDevelopment: ENVIRONMENT === 'development',
  common: {
    increaseApi: {
      url: process.env.INCREASE_URL,
      token: process.env.INCREASE_TOKEN
    },
    databaseApi: {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || '8081'
    }
  }
};
