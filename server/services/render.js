const axios = require('axios')

exports.homeRender = (req,res) => {
    res.render('index', {title:'Home', h1:'Anasayfa'})
}