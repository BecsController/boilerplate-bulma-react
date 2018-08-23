const express = require('express')
const server = express()
const path = require('path')

const passport = require('passport')
const bodyParser = require('body-parser')
const cors = require('cors')
const authRoutes = require('./routes/auth')

server.use(passport.initialize())
server.use(cors('*'))

server.use(bodyParser.json({limit: 500000}))
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api/v1/auth', authRoutes)
server.use('/api', require('./routes/routes'))

module.exports = server
