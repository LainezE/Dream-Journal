const { Dream } = require('../models')

module.exports = {
    async createDreams(req, res) {
        try {
            const dream = await Dream.create(req.body)
            const dreamJSON = dream.toJSON()
            res.send(dreamJSON)
        } catch (error) {
            error: "Error Creating Dream"
        }
    },
    async getDreams(req, res) {
        try {
            const dreams = await Dream.findAll()
            res.send(dreams)
        } catch (error) {
            error: "No Dreams Found"
        }
    }
}