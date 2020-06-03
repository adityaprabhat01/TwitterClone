const express = require('express')
const router = express.Router()
let User = require('../models/User')
let Tweet = require('../models/Tweet')

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

router.get('/me', (req, res) => {
    res.send('My Homepage')
})

router.post('/tweet/user/:id', (req, res) => {
    console.log(req.body)
    Tweet.create(req.body)
    .then((data) => {
        return User.findOneAndUpdate({ _id: req.params.id }, { $push: {'tweets': data._id} }, { new: true });
    })
    .catch()

    res.send("Tweet Created")
})

router.get('/tweet/user/:id', async (req, res) => {
    await User.find({ _id: req.params.id })
    .populate('tweets')
    .then((tweets) => {
        res.send(tweets[0].tweets)
    })
    .catch()
})

// router.patch('/tweet/user/:id', async (req, res) => {
//     console.log(req.body)
//     Tweet.create(req.body)
//     .then((data) => {
//         return User.findOneAndUpdate({ _id: req.params.id }, { tweets: data._id }, { new: true });
//     })
//     .catch()

//     res.send("Tweet created")

// })

module.exports = router