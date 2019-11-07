const moment = require('moment');

const { id, date, amount, transaction, payment } = require('../constants/rawprops');
const { logger } = require('../logger');

const generateFotter = rawFooter => ({
  clientId: rawFooter.slice(id.clientPos, id.clientPos + id.len),
  paymentDate: moment(rawFooter.slice(date.pos, date.pos + date.len), date.format)
});

const generateTransaction = (rawTransaction, footer) => ({
  id: rawTransaction.slice(id.pos, id.pos + id.len),
  clientId: footer.clientId,
  amount: rawTransaction.slice(transaction.amountPos, transaction.amountPos + amount.len),
  approved: rawTransaction.slice(transaction.approvedPos) === '1'
});

const generatePayment = (rawPayment, footer) => ({
  id: rawPayment.slice(id.pos, id.pos + id.len),
  clientId: footer.clientId,
  currency:
    rawPayment.slice(payment.currencyPos, payment.currencyPos + payment.currencyLen) === '000'
      ? 'ARS'
      : 'USD',
  totalAmount: rawPayment.slice(payment.totalAmountPos, payment.totalAmountPos + amount.len),
  totalDiscount: rawPayment.slice(payment.totalDiscountPos, payment.totalDiscountPos + amount.len),
  amountDiscounted: rawPayment.slice(payment.amountDiscountedPos, payment.amountDiscountedPos + amount.len),
  paymentDate: footer.paymentDate
});

exports.formatter = data => {
  logger.info('Attemp to format data');
  const dataArray = data.split('\n');
  const formattedArray = [];
  const auxArray = [];
  dataArray.forEach(dato => {
    auxArray.push(dato);
    if (dato[0] === '3') auxArray.pop();
    if (dato[0] === '4') {
      formattedArray.push(auxArray.slice());
      auxArray.length = 0;
    }
  });
  return formattedArray;
};

exports.generateObjects = rawData => {
  //logger.info('Atempt to generate objects');
  const copyData = [...rawData];
  const footer = generateFotter(copyData.pop());
  const payment = generatePayment(copyData.shift(), footer);
  const transactions = copyData.map(rawTransaction => generateTransaction(rawTransaction, footer));
  return { footer, payment, transactions };
};
