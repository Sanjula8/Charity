module.exports = function (sequelize, DataTypes) {
  var Charity = sequelize.define("Charity", {
    // The email cannot be null, and must be a proper email before creation

    charityName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ein: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    volunteer: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    donation: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    mission: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  Charity.associate = function (models) {
    // We're saying that a Stock should belong to an Author
    // A Stock can't be created without an Author due to the foreign key constraint
    Charity.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return Charity;
};
