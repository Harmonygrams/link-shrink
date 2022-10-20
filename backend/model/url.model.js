const moment = require('moment')
const {Schema, model } = require('mongoose') 
const urlSchema = Schema({
    originalLink : {type : String, required : true, trim : true}, 
    shortenedLink : {type : String, trim : true}, 
    createdAt : {type : Date, deafult : Date.now()}, 
    expiresAt : {type : Date, default : moment().add(7, 'days').calendar()}, 
    registeredUser : {type : Boolean, default : false}
})
const Url = model('Url', urlSchema)
module.exports = Url 