const { Dream } = require('../models')


module.exports = {
    async createDreams(req, res) {
        try {
            const dream = await Dream.create(req.body)
            const dreamJSON = dream.toJSON()
            console.log(dreamJSON)
            res.send(dreamJSON)
        } catch (error) {
            error: "Error Creating Dream"
        }
    },
    async getDreams(req, res) {
        try {
            console.log('ENTERED getDreams() ')
            const dreams = await Dream.findAll({
                //raw: true,
                limit: 10
            })
            console.log(dreams)
            res.send(dreams)
        } catch (error) {
            error: "No Dreams Found"
        }
    }
}