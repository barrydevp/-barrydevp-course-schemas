const {Schema} = require('mongoose')

const Log = new Schema({

    url: {
        type: String,
        trim: true,
        index: true,
        required: true,
    },

    total_question: {
        type: Number,
        required: true,
        default: 0,
    },

    success_question: {
        type: Number,
        required: true,
        default: 0,
    },

    error_question: {
        type: Number,
        required: true,
        default: 0,
    },

    status: {
        type: String,
        trim: true,
        index: true,
        required: true,
        default: 'unknown',
        enum: ['unknown', 'success', 'error'],
    },

    created_at: {
        type: Date,
        default: Date.now,
        index: true,
    },

    quiz_id: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz',
        index: true,
        required: true,
    },

})

module.exports = Log
