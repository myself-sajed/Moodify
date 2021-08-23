const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    mood: {
        type: 'array',
        required: true
    },
    artists: {
        type: 'string',
        required: true
    },
    movie: {
        type: 'string',
        required: true
    }


})

module.exports = mongoose.model('song', songSchema)