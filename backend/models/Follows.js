const mongoose = require('mongoose')

const FollowSchema = new mongoose.Schema({
    own: {
        type: mongoose.Schema.Types.ObjectId,
    },

    following: [{
        type: mongoose.Schema.Types.ObjectId,
        unique: true
    }]
})

const Follow = mongoose.model('Follow', FollowSchema)

module.exports = Follow