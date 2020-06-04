const mongoose = require('mongoose')
const User = require('./User')

const FollowSchema = new mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    }]
})

const Follow = mongoose.model('Follow', FollowSchema)

export default Follow