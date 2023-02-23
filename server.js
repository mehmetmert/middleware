const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')

const router = require('./server/router/router')
const connectDB = require('./server/database/connect')

const app = express()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

app.set('view engine', 'ejs')

app.set('/css', express.static(path.resolve(__dirname, 'assets/css')))
app.set('/js', express.static(path.resolve(__dirname, 'assets/js')))
app.set('/img', express.static(path.resolve(__dirname, 'assets/img')))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(router)

connectDB()

app.listen(PORT, () => console.log(`App Listen On: ${PORT}`))