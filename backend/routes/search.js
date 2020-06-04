const express = require('express')
const router = express.Router()
let User = require('../models/User')

router.post('/user', async (req, res) => {
    var name = req.body.name
    var user = await User.find({ name: name })
    .then((data) => res.send({ user: data }))
    .catch((error) => res.send('Not found'))
    
})

module.exports = router