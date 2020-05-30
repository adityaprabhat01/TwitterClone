const mongoose = require('mongoose')

const TweetSchema = new mongoose.Schema({
    username: String,
    tweet: String
})

const Tweet = mongoose.model('Tweet', TweetSchema)


module.exports = Tweet