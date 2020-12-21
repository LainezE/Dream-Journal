const jwt = require('jsonwebtoken')
const config = require('../config/config')
const { User } = require('../models')
const bcrypt = require('bcryptjs')

function jwtSignUser (user) {
    const oneWeek = 60*60*24*7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn : oneWeek
    })
}
function registerHashPassword (password) {
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(password, salt);
    return hash
}

module.exports = {
    async register(req, res) {
        try {
            req.body.password = await registerHashPassword(req.body.password)
            const user = await User.create(req.body)
            const userJSON = user.toJSON()
            res.send({
                user: userJSON,
                token: jwtSignUser(userJSON)
            })
        } catch (err) {
            res.status(400).send({
                error: 'This email is already in use.'
            })
        }
    },
    async login(req, res) {
        const { email, password } = req.body
        try {
            const user = await User.findOne({
                where: {
                    email: email
                }
            });
            if (!user) {
                return res.status(403).send({
                    error: 'Login Info was incorrect'
                })
            }
            const isPasswordValid = await user.comparePassword(password)
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'Login Info was incorrect' + isPasswordValid
                })
            }
            const userJSON = user.toJSON()
            res.send({
                user: userJSON,
                token: jwtSignUser(userJSON)
            })
        } catch (err) {
            res.status(500).send({
                error: 'Invalid Login Information'
            })
        }
    }
}
