const express = require('express')
const router = express.Router()

const controller = require('../controller/controller')
const services = require('../services/render')
const middleware = require('../middleware/middleware')

router.get('/', services.homeRender)

module.exports = router