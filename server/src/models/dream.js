
module.exports = (sequelize, DataTypes) => {
    const Dream = sequelize.define('Dream', {
        title: DataTypes.STRING,
        body: DataTypes.STRING
    })
    console.log(Dream)
    return Dream
};