//const bcrypt = require('bcrypt-nodejs')
const { hash } = require('bcrypt-nodejs');
const Promise = require('bluebird')
const bcrypt = require('bcryptjs')

function hashPassword (user, options) {
    if(!user.changed('password')){
        return;
    }
    console.log(" CHANGED")
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(user.password, salt);
    return hash
}

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING

    }, {
        hooks: {
            beforeCreate: hashPassword
        }
    })
    User.prototype.comparePassword = function (password) {
      return bcrypt.compare(password, this.password)
    }
    return User
  }