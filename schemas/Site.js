const {Schema} = require('mongoose')

const Course = new Schema({

    name: {
        type: String,
        trim: true,
        index: true,
    },

    url: {
        type: String,
        trim: true,
        index: true,
        required: true,
    },

    status: {
        type: String,
        trim: true,
        required: true,
        default: 'created',
        enum: ['created', 'updated'],
    },

    updated_at: {
        type: Date,
        default: Date.now,
        index: true,
    },

    created_at: {
        type: Date,
        default: Date.now,
        index: true,
    },

})

module.exports = Course
