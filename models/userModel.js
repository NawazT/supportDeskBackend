const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
    name: {
        type: String,
        required: [true, 'Please enter a name'],
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, 'Please enter an email'],
        unique: true,
    },

    password: {
        type: String,
        required: [true, 'Please enter a password'],
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },

    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('User', userSchema)