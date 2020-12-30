const AuthenticationController = require('./controllers/AuthenticationController')
const DreamJournalController = require('./controllers/DreamJournalController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')

module.exports = (app) => {

    app.get('/', (req, res) => {
    }),
    app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register),
    app.post('/login', AuthenticationController.login),
    app.get('/register', (req, res) => {
        res.send({
            message: `hello ${req.body.email}, User was registered`
        })
    })
    app.get('/dreams/:userID', DreamJournalController.getDreams),
    app.post('/dreams', DreamJournalController.createDreams),
    app.get('/users', AuthenticationController.getUsers),
    app.get('/dreams', DreamJournalController.getAllDreams)
}
