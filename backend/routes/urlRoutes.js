const router = require("express").Router() 
const shortenUrl = require('../utils.js/shortenUrl')

router.post('/shorten', shortenUrl)

module.exports = router 