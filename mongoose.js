const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/question')

var questionSchema = new mongoose.Schema({
    uploader: {
        type: String,
        reqiured: true
    },
    topic: {
        type: String,
        reqiured: true
    },
    tag: {
        type: Number,
        reqiured: true
    },
    optionA: {
        type: String,
        reqiured: true
    },
    optionB: {
        type: String,
        reqiured: true
    },
    optionC: {
        type: String,
        reqiured: true
    },
    optionD: {
        type: String,
        reqiured: true
    },
    answer: {
        type: String,
        reqiured: true
    },
    analysis: {
        type: String,
    }
})

module.exports = mongoose.model('Question', questionSchema)