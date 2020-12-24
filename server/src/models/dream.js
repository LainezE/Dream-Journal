
module.exports = (sequelize, DataTypes) => {
    const Dream = sequelize.define('Dream', {
        title: DataTypes.STRING,
        body: DataTypes.TEXT,
        lucidity: DataTypes.INTEGER,
        date: DataTypes.DATEONLY
    })
    return Dream
};