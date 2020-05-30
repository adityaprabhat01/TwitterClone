const express = require('express')
const router = express.Router()
let User = require('../models/User')

router.route('/').get((req, res) => {
   console.log(User.find())
})

router.post('/add' ,(req, res) => {
    const name = req.body.name
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password

    console.log(req.body)

    const newUser = new User({name, email, username, password})

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    
    console.log(username, password)

    const userData = User.findByUsername(username, password)

    userData
    .then((data) => res.send({ data: data }))
    .catch((error) => res.send("Couldn't fetch data"))
    
})

module.exports = router