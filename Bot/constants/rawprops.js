exports.id = {
  pos: 1,
  len: 32,
  clientPos: 24
};
exports.date = {
  pos: 16,
  len: 8,
  format: 'YYYYMMDD'
};
exports.amount = {
  len: 13
};
exports.payment = {
  currencyPos: 36,
  currencyLen: 3,
  totalAmountPos: 39,
  totalDiscountPos: 52,
  amountDiscountedPos: 65
};
exports.transaction = {
  amountPos: 33,
  approvedPos: 51,
  approvedLen: 1
};
