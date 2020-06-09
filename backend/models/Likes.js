const mongoose = require('mongoose')

const LikeSchema = new mongoose.Schema({
    own: {
        type: mongoose.Schema.Types.ObjectId,
        unique: true
    },

    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        unique: true
    }]
})

const Likes = mongoose.model('Likes', LikeSchema)

module.exports = Likes