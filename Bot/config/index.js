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
    },
    id: {
      pos: Number(process.env.ID_POS),
      len: Number(process.env.ID_LEN),
      clientPos: Number(process.env.ID_CLIENT_POS)
    },
    date: {
      pos: Number(process.env.DATE_POS),
      len: Number(process.env.DATE_LEN),
      format: process.env.DATE_FROMAT
    },
    amount: {
      len: Number(process.env.AMOUNT_LEN)
    },
    payment: {
      currencyPos: Number(process.env.PAYMENT_CURRENCY_POS),
      currencyLen: Number(process.env.PAYMENT_CURRENCY_LEN),
      totalAmountPos: Number(process.env.PAYMENT_TOTALAMOUNT_POS),
      totalDiscountPos: Number(process.env.PAYMENT_TOTALDISCOUNT_POS),
      amountDiscountedPos: Number(process.env.PAYMENT_AMOUNTDISCOUNTED_POS)
    },
    transaction: {
      amountPos: Number(process.env.TRANSACTION_AMOUNT_POS),
      approvedPos: Number(process.env.TRANSACTION_APPROVED_POS),
      approvedLen: Number(process.env.TRANSACTION_APPROVED_LEN)
    }
  }
};
