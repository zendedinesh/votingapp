const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: [true, "please enter first name"]
    }, 
    email: {
        type: String,
        required: [true, "please enter email address"],
        unique: true
    },
   
    password: { 
        type: String,
        required: [true, "please enter a password"],
        minlength: [8, "the password must be more than 6 character"]
    },
    phoneNumber: {
        type: String,
        required: [true, "please enter PhoneNumber"],
        unique: true
    },
    hasVoted:Boolean,
    ROLE:String
   

});

module.exports = mongoose.model('user', userSchema)  