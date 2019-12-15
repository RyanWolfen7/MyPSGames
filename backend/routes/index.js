const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('hello')
})

router.post('/addGame', (req, res) => {
  console.log(req)
  res.send({data: req})
})

module.exports = router
