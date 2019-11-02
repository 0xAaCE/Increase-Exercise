exports.checkCreatePayment = {
  clientId: {
    exists: {
      errorMessage: "Payment's client id attribute is missing"
    }
  },
  currency: {
    exists: {
      errorMessage: "Payment's currency attribute is missing"
    }
  },
  totalAmount: {
    exists: {
      errorMessage: "Payment's total amount attribute is missing"
    },
    isInt: {
      errorMessage: 'Total amount must be integer'
    }
  },
  totalDiscount: {
    exists: {
      errorMessage: "Payment's total discount attribute is missing"
    },
    isInt: {
      errorMessage: 'Total discount must be integer'
    }
  },
  amountDiscounted: {
    exists: {
      errorMessage: "Payment's amount discounted attribute is missing"
    },
    isInt: {
      errorMessage: 'Amount discounted must be integer'
    }
  },
  paymentDate: {
    exist: {
      errorMessage: "Payment's payment date attribute is missing"
    },
    isISO8601: {
      errorMessage: 'Payment date bad format'
    }
  }
};
