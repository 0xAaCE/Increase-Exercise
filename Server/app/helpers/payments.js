const moment = require('moment');

exports.sum = payments => {
  const accumulator = { received: 0, toReceive: 0 };
  payments.forEach(payment => {
    if (moment().isSameOrBefore(payment.paymentDate)) {
      accumulator.toReceive += Number(payment.amountDiscounted);
    } else {
      accumulator.received += Number(payment.amountDiscounted);
    }
  });
  return accumulator;
};
