module.exports = (sequelize, DataTypes) => {
  const Payment = sequelize.define(
    'payments',
    {
      client_id: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'client_id'
      },
      currency: {
        type: DataTypes.ENUM('ARS', 'USD'),
        allowNull: false
      },
      totalAmount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'total_amount'
      },
      totalDiscount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'total_discount'
      },
      amountDiscounted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        field: 'amount_discounted'
      },
      paymentDate: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'payment_date'
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at'
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at'
      }
    },
    {}
  );
  return User;
};
