const mongoose = require('mongoose')
require('dotenv').config() 
const MONGO_URI = process.env.MONGO_URI
const connectDatabase = async () => {
    try{
        await mongoose.connect(MONGO_URI, () => {
            console.log('Database connected')
        })
    }catch(err){
        console.log('error')
    }
}
module.exports =  connectDatabase