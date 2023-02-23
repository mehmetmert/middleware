const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log(`App Hosted On: ${con.connection.host}`)
    } catch(err) {
        console.log(err)
    }
}

module.exports = connectDB