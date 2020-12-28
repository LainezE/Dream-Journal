const { Dream } = require('../models')

module.exports = {
    async createDreams(req, res) {
        try {
            const dream = await Dream.create(req.body)
            console.log("After Create Dream Function")
            const dreamJSON = dream.toJSON()
            console.log("After dream to dreamJSON")
            res.send(dreamJSON)
        } catch (error) {
            error: "Error Creating Dream"
        }
    },
    async getDreams(req, res) {
        try {
            const dreams = await Dream.findAll({
                where: {
                    userID: req.params.userID
                }
            })
            res.send(dreams)
        } catch (error) {
            error: "No Dreams Found"
        }
    }
}