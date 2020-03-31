"use strict";
module.exports = (sequelize, DataTypes) => {
  const Charity = sequelize.define(
    "Charity",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      phonenumber: DataTypes.INTEGER
    },
    {}
  );
  Trips.associate = function(models) {
    // trips belong to a user
    models.Trips.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    console.log(models);
  };
  return Trips;
};
