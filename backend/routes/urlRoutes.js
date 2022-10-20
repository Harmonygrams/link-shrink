const router = require("express").Router() 
const shortenUrl = require('../utils.js/shortenUrl')

router.post('/shorten', async (req, res, next) => {
    const originalUrl = req.body 
    try{
        console.log(shortenUrl(originalUrl))
    }catch(err){
        console.log(err)
    }
})

module.exports = router 