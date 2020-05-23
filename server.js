const express = require('express')

const auth = require('./auth/auth-router')

const server = express()

server.use(express.json())

server.use('/api/auth', auth)

module.exports = server