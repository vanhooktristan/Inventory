const {User} = require('../models')

module.exports = {
    async register (req, res) {
        try {
            const user = await User.create(req.body)
            res.send(user.toJSON())
            console.log(user)
        } catch (err) {
            res.status(400).send({
                error: 'This email account is already in use.'
            })
        }
        
    },
    async login (req, res) {
        try {
            const {email, password} = req.body
            console.log(email, password)
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if (!user) {
                res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            const isPasswordValid = password === user.password

            console.log(isPasswordValid)
            if (!isPasswordValid) {
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }
            res.send(User.toJson())
        } catch (err) {
            res.status(500).send({
                error: 'An error has occured trying to log in.'
            })
        }
    }
}