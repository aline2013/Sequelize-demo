module.exports = function(sequelize, DataTypes) {
    return sequelize.define('blog', {
        title: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        body: {
            type: DataTypes.STRING(5000),
            allowNull: false
        }
    })
}