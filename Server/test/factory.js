const chance = require('chance')();

exports.createFakeClient = (props = {}) => ({
  id: props.id || chance.string({ length: 31, pool: 'qwertyuioasdfghjk' }),
  email: props.email || chance.email(),
  first_name: props.first_name || chance.first(),
  last_name: props.last_name || chance.last(),
  job: props.job || chance.word(),
  country: props.county || chance.country(),
  address: props.address || chance.address(),
  zip_code: props.zip_code || chance.zip(),
  phone: props.phone || chance.phone()
});

exports.createFakePayment = (props = {}) => ({
  id: props.id || chance.string({ length: 31, pool: 'qwertyuioasdfghjk' }),
  clientId: props.clientId || chance.string({ length: 32, pool: 'qwertyuioasdfghjk' }),
  currency: props.currency || 'ARS',
  totalAmount: props.totalAmount || chance.integer({ min: 0, max: 10000 }),
  totalDiscount: props.totalDiscount || chance.integer({ min: 0, max: 10000 }),
  amountDiscounted: props.amountDiscounted || chance.integer({ min: 0, max: 10000 }),
  paymentDate: props.paymentDate || chance.date()
});

exports.createFakeTransaction = (props = {}) => ({
  id: props.id || chance.string({ length: 31, pool: 'qwertyuioasdfghjk' }),
  clientId: props.clientId || chance.string({ length: 32, pool: 'qwertyuioasdfghjk' }),
  amount: props.amount || chance.integer({ min: 0, max: 10000 }),
  approved: props.approved !== undefined ? props.approved : chance.bool()
});

exports.createManyFakePayments = (n, props) => {
  output = [];
  for (let i = 0; i < n; i++) {
    output.push(exports.createFakePayment(props));
  }
  return output;
};

exports.createManyFakeTransactions = (n, props) => {
  output = [];
  for (let i = 0; i < n; i++) {
    output.push(exports.createFakeTransaction(props));
  }
  return output;
};
