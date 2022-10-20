const express = require('express')
const cors = require('cors') 
const app = express()
const connectDatabase = require('./utils.js/connectDatabase')
const routes = require('./routes')

//Middlewares 
app.use(cors()) 
app.use(express.json())
app.use(routes)
connectDatabase()
app.listen(5001, () => {
    console.log('Server is listening to port ', 5001)
})