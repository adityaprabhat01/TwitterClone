const mongoose = require('mongoose')
const User = require('./User')

const TweetSchema = new mongoose.Schema({
    tweet: {
        type: String
    }
})

const Tweet = mongoose.model('Tweet', TweetSchema)


module.exports = Tweet