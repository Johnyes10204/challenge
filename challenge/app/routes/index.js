var router = require('express').Router()
var personas = require('./personas')

router.use('/', personas)

router.get('/', function (req, res) {
  res.status(200).json({ message: 'API mutantes' })
})

module.exports = router