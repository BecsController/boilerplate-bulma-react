const server = require('./server')
require('dotenv').config()

const port = process.env.PORT || 3000

server.listen(3000, () => {
  console.log("Server is listening")
})
