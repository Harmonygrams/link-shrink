const mongoose = require('mongoose')
const connectDatabase = async () => {
    const uri = 'mongodb+srv://admin:admin@cluster0.rnti4kn.mongodb.net/slaiz-links?retryWrites=true&w=majority'
    try{
        await mongoose.connect(uri, () => {
            console.log('Database connected')
        })
    }catch(err){
        console.log('error')
    }
}
module.exports =  connectDatabase