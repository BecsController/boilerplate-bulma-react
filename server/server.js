
const express = require('express')
const server = express()

server.use('/api/routes', require('./routes/routes'))

module.exports = server
