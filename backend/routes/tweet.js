const express = require('express')
const router = express.Router()
let Tweet = require('../models/Tweet')

router.get('/' ,(req, res) => {
    console.log(Tweet.find())
})

router.post('/add', (req, res) => {
    const tweet = req.body.tweet

    const newTweet = new Tweet({tweet})

    newTweet.save()
    .then(() => res.json('Tweet added!'))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router