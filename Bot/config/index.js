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
      url: process.env.DB_URL || 'http://localhost:8081'
    }
  }
};
