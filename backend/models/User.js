const mongoose = require('mongoose')
const validator = require('validator')

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

    follow: []

})

UserSchema.statics.findByUsername = async (username, password) => {

    const user = await User.find({ username })

    if(!user) {
        throw new Error('User does not exist')
    }

    return user
}


const User = mongoose.model('User', UserSchema)

module.exports = User