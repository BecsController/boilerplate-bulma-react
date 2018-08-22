const express = require('express')
const server = express()

const path = require('path')

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/api', require('./routes/routes'))

module.exports = server
