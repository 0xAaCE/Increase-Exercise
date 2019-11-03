const ENVIRONMENT = process.env.NODE_ENV || 'development';

if (ENVIRONMENT !== 'production') {
  require('dotenv').config();
}

exports.config = {
  common: {
    api: {
      bodySizeLimit: process.env.API_BODY_SIZE_LIMIT,
      parameterLimit: process.env.API_PARAMETER_LIMIT,
      port: process.env.PORT
    },
    increaseApi: {
      url: process.env.INCREASE_URL,
      token: process.env.INCREASE_TOKEN
    }
  }
};
