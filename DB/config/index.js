const ENVIRONMENT = process.env.NODE_ENV || 'development';

if (ENVIRONMENT !== 'production') {
  require('dotenv').config();
}

exports.config = {
  environment: ENVIRONMENT,
  isDevelopment: ENVIRONMENT === 'development',
  common: {
    api: {
      bodySizeLimit: process.env.API_BODY_SIZE_LIMIT,
      parameterLimit: process.env.API_PARAMETER_LIMIT,
      port: process.env.PORT
    },
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      name: ENVIRONMENT === 'testing' ? process.env.DB_NAME_TEST : process.env.DB_NAME
    }
  }
};
