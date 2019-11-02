module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    'transactions',
    {
      clientId: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'client_id'
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'amount'
      },
      approved: {
        type: DataTypes.BOOLEAN,
        allowNull: false
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
  return Transaction;
};
