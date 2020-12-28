
module.exports = (sequelize, DataTypes) => {
    const Dream = sequelize.define('Dream', {
        title: DataTypes.STRING,
        body: DataTypes.TEXT,
        lucidity: DataTypes.INTEGER,
        date: DataTypes.DATEONLY,
        userID:{
            type: DataTypes.INTEGER, 
            //This is a foreign key to create a one to many relationship
            references: {
                model: 'user',
                key: 'id'
            }
        }
    })
    return Dream
};