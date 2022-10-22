const router = require('express').Router() 
const shorten = require('./urlRoutes') 
router.use('/url', shorten)
router.get('/', (req, res, next) => {
    res.send('<h1> Working... </h1>')
})
module.exports = router;