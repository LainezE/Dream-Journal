//const bcrypt = require('bcrypt-nodejs')
const { hash } = require('bcrypt-nodejs');
const Promise = require('bluebird')
const bcrypt = require('bcryptjs')

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      email: {
        type: DataTypes.STRING,
        unique: true
      },
      password: DataTypes.STRING

    })
    User.prototype.comparePassword = function (password) {
      console.log('Entered comparePassword function password is: ' + password + ' ' + this.password)
      const comparison = bcrypt.compareSync(password, this.password)
      console.log('Comparison is ' + comparison)
      return comparison
    }
    return User
  }