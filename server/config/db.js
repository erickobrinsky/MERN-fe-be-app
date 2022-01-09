const mongoose = require('mongoose')

require('dotenv').config({path: 'variables.env'})

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('database connected');
    } catch (error) {
        console.log(error);
        process.exit(1) //in case error during conection stop the app
    }
}

module.exports = connectDB