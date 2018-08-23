const router = require('express').Router()

const usersDb = require('../db/users')

router.get('/', (req, res) => {
  res.send('hello, world')
})

router.get('/users', (req, res) => {
  usersDb.getUsers()
    .then(users => {
      res.json({users})
  })
})

module.exports = router
