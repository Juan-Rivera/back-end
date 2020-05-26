const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const restricted = require('./auth/middleware')

const auth = require('./auth/auth-router')
const songs = require('./songs/songs-router')

const server = express()

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use('/api/auth',  auth)
server.use('/api/songs', restricted, songs)

module.exports = server