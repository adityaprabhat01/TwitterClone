const mongoose = require('mongoose')
const User = require('./User')

const FollowSchema = new mongoose.Schema({
    own: {
        type: mongoose.Schema.Types.ObjectId,
    },

    following: [{
        type: mongoose.Schema.Types.ObjectId
    }]
})

const Follow = mongoose.model('Follow', FollowSchema)

module.exports = Follow