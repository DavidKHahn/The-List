module.exports = function (sequelize, DataTypes) {
    var List = sequelize.define("List", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        }, 
        asin: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
            timestamps: false
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
