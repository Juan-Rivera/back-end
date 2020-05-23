const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.headers.authorization

    if(token){
        const secret = process.env.JWT_SECRET || 'somethingsupersecret'

    jwt.verify(token, secret, (error, decodedToken) => {
        if(error){
            res.status(401).json({ message: 'Must be logged in with valid credentials to access this.'})
        } else {
            req.jwt = decodedToken
            next()
        }
    })
    } else {
        res.status(400).json({ message: 'Please provide the authentication information'})
    }
}