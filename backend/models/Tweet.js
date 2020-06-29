const mongoose = require('mongoose')
const User = require('./User')
mongoose.set('useFindAndModify', false)
const TweetSchema = new mongoose.Schema({
    own: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true
    },
    tweet: {
        type: String
    }
})

const Tweet = mongoose.model('Tweet', TweetSchema)


module.exports = Tweet