const jwt = require('jsonwebtoken')
const config = require('../config/config')
const { User } = require('../models')

function jwtSignUser (user) {
    const oneWeek = 60*60*24*7
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn : oneWeek
    })
}

module.exports = {
    async register(req, res) {
        try {
            const user = await User.create(req.body)
            const userJSON = user.toJSON()
            console.log(user)
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
                    error: 'Login Info was incorrect'
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
