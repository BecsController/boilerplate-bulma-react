const router = require('express').Router()

const usersDB = require('../db/users')

router.get('/', (req, res) => {
  res.send('hello, world')
})

router.get('/users', (req, res) => {
  usersDB.getUsers()
    .then(users => {
      res.json(users)
  })
})

module.exports = router
