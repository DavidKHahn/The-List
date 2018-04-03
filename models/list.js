module.exports = function (sequelize, DataTypes) {
    var List = sequelize.define("List", {

        asin: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        }
    });

    List.associate = function (models) {

        List.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return List;
};
