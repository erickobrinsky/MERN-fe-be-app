const express = require('express');
const connectDB = require('./config/db')
//create server
const app = express();

//connect to the database
connectDB()

//ability express.json to read data that user write / same as bodyparser
app.use(express.json({extends: true}))

//app port
const PORT = process.env.PORT || 4000

//import routes 
app.use('/api/users', require('./routes/users'))


//start app
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})