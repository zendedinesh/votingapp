const mongoose = require('mongoose')

const candidateSchema = new mongoose.Schema({
    name:  String,
    totalVotes:Number,
    votes:Array
    
})
module.exports = mongoose.model('candidate', candidateSchema)