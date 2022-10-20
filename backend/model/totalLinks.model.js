const {Schema, model } = require('mongoose') 
const totalLinksSchema = Schema({
    totalLinks : {type : Number, default : 0}
})
const TotalLinks = model('TotalLinks', totalLinksSchema)
module.exports = TotalLinks