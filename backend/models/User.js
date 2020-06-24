const mongoose = require('mongoose')
const validator = require('validator')
const Tweet = require('./Tweet')
mongoose.set('useFindAndModify', false)
const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,

        validate(value) { 
            if (!validator.isEmail(value)) {
                throw new Error('Invalid Email')
            }
        }
    },

    password: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        lowercase: true,
        trim: true
    },

    tweets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tweet'
    }],

    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],

})

UserSchema.statics.findByUsername = async (username, password) => {

    const user = await User.find({ username })

    if(!user) {
        throw new Error('User does not exist')
    }
    
    if(user[0].password === password){
        return user
    }
    
    return false
}


const User = mongoose.model('User', UserSchema)

module.exports = User