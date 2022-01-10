const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors')

//create server
const app = express();

//connect to the database
connectDB()

//ability cors
app.use(cors())

//ability express.json to read data that user write / same as bodyparser
app.use(express.json({extends: true}))

//app port
const PORT = process.env.PORT || 4000

//import routes 
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/projects', require('./routes/projects'))
app.use('/api/tasks', require('./routes/tasks'))

//start app
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`)
})