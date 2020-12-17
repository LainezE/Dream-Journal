const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {

    app.get('/', (req, res) => {
    }),
    app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register),
    app.post('/login', AuthenticationController.login)
    app.get('/register', (req, res) => {
        res.send({
            message: `hello ${req.body.email}, User was registered`
        })
    })
}
