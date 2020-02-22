const {Schema} = require('mongoose')

const Question = new Schema({

    code: {
        type: String,
        trim: true,
        index: true,
        required: true,
    },

    content: {
        type: String,
        trim: true,
        index: true,
    },

    answer: {
        type: String,
        trim: true,
        index: true,
    },

    status: {
        type: String,
        trim: true,
        required: true,
        default: 'created',
        enum: ['created', 'updated', 'crawler'],
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

    quiz_id: {
        type: Schema.Types.ObjectId,
        ref: 'Quiz',
        index: true,
        required: true,
    },
})

module.exports = Question
