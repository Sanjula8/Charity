module.exports = function(sequelize, DataTypes) {
	var Charity = sequelize.define("Charity", {
		// The email cannot be null, and must be a proper email before creation

		CharityName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		EIN: {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		Volunteer: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		}
	});

	Charity.associate = function(models) {
		// We're saying that a Stock should belong to an Author
		// A Stock can't be created without an Author due to the foreign key constraint
		Charity.belongsTo(models.Users, {
			foreignKey: {
				allowNull: false
			}
		});
	};

	return Charity;
};
