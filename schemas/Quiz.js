const {Schema} = require('mongoose')

const Quiz = new Schema({

    code: {
        type: String,
        trim: true,
        index: true,
        required: true,
    },

    name: {
        type: String,
        trim: true,
        index: true,
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

    course_id: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
        index: true,
        required: true,
    },
})

module.exports = Quiz
