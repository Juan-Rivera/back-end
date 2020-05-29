const router = require('express').Router()
const bcrypt = require('bcryptjs')
const Users = require('./auth-model')
const jwt = require('jsonwebtoken')
const restricted = require('./middleware')

function isValid(user) {
    return Boolean(user.username && user.password && typeof user.password === "string");
  }

router.post('/register', (req, res) => {
    const {name, username, password} = req.body

    if(isValid(req.body)){
        Users.add({name, username, password:bcrypt.hashSync(password, 8)})
        .then(user => {
            res.status(201).json({name: name, username:username})
        })
        .catch(e => {
            res.status(500).json({ error: e.message })
        })
    } else {
        res.status(400).json({error: 'Please provide username and password'})
    }
})

router.post('/login', (req, res) => {
    const {username, password} = req.body

    if(req.body){
        Users.findByFilter({username: username})
        .then(([user]) => {
            if(user && bcrypt.compareSync(password, user.password)){
                const token = generateToken(user)
                console.log(req.body)
                res.status(201).json({ message: 'Login successful', user, token})
            } else {
                res.status(401).json({ message: 'Invalid credentials'})
            }
        })
        .catch(e => {
            res.status(500).json({error: e.message})
        })
    } else {
        res.status(403).json({ error: 'Invalid username and password'})
    }
})

router.patch('/:id', (req, res) => {
    const id = req.params.id
    const changes = req.body
    Users.update(changes, id)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(e => {
        res.status(500).json({ error: e.message})
    })
})

router.get('/', restricted, (req, res) => {
    Users.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(er => {
        res.send(er)
    })
})

router.get('/:id', restricted, (req, res) => {
    const id = req.params.id
    Users.findById(id)
    .then(user => {
        res.status(200).json(user)
    })
    .catch(er => {
        res.send(er)
    })
})

function generateToken(user){
    const payload = {
        sub: user.id,
        username: user.username
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, process.env.JWT_SECRET || 'somethingsupersecret', options)
}

module.exports = router