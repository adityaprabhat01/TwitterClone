const express = require('express')
const router = express.Router()
let User = require('../models/User')
let Tweet = require('../models/Tweet')
let Follow = require('../models/Follows')

router.post('/add' ,(req, res) => {
    const name = req.body.name
    const email = req.body.email
    const username = req.body.username
    const password = req.body.password
    const newUser = new User({name, email, username, password})
    const newFollowList = new Follow({ own: newUser._id })

    newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err))

    newFollowList.save()
    .then(() => res.json('Follow list created'))
    .catch(err => res.status(400).json('Error: ' + err)) 
})

router.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    const userData = User.findByUsername(username, password)

    userData
    .then((data) => res.send({ data: data }))
    .catch((error) => res.send("Couldn't fetch data"))
    
})

router.post('/tweet/user/:id', (req, res) => {
    Tweet.create(req.body)
    .then((data) => {
        return User.findOneAndUpdate({ _id: req.params.id }, { $push: {'tweets': data._id} }, { new: true });
    })
    .catch()

    res.send("true")
})

router.get('/tweet/user/:id', async (req, res) => {
    await User.find({ _id: req.params.id })
    .populate('tweets')
    .then((tweets) => {
        res.send(tweets[0].tweets)
    })
    .catch()
})

router.get('/tweet/homepage/:id', async (req, res) => {
    var tweetsToSend = []
    var count = 0
    await Follow.find({ own: req.params.id })
    .then((data) => {
        const following = data[0].following
        const num = following.length
        following.map(async (_id) => {
            await User.find({ _id })
            .populate('tweets')
            .then((tweet) => {
                tweet[0].tweets.map(async (tweet) => {
                    await tweetsToSend.push(tweet.tweet)
                })
                count++
                if(num === count) {
                    res.send({ tweetsToSend, following })
                }
            })
            .catch()
        })
    })
    .catch()
})


router.post('/follow', async (req, res) => {
    await Follow.findOneAndUpdate({ own: req.body.own }, { $push: {'following': req.body.toFollow} }, { new: true } )
    res.send(true)
})

router.post('/unfollow', async (req, res) => {
    console.log(req.body)
    await Follow.findOneAndUpdate({ own: req.body.own }, { $pull: {'following': req.body.toUnfollow} } )
    .then(res.send(true))
    .catch()
})

module.exports = router