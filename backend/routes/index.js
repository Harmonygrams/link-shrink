const router = require('express').Router() 
const shorten = require('./urlRoutes') 
router.use('/url', shorten)
module.exports = router;