const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const RetweetSchema = new mongoose.Schema({
    own: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true
    },

    retweet: [{
        type: mongoose.Schema.Types.ObjectId,
        unique: true
    }]
})

const Retweet = mongoose.model('Retweet', RetweetSchema)

module.exports = Retweet