exports.transactionSchema = {
  clientId: {
    exists: {
      errorMessage: "Transaction's client id attribute is missing"
    }
  },
  amount: {
    exists: {
      errorMessage: "Transaction's amount attribute is missing"
    },
    isInt: {
      errorMessage: 'Total amount must be integer'
    }
  },
  approved: {
    exists: {
      errorMessage: "Transaction's approvment attribute is missing"
    }
  }
};
