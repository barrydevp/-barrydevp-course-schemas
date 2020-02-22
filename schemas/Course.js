const {Schema} = require('mongoose')

const Course = new Schema({

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

    site_id: {
        type: Schema.Types.ObjectId,
        ref: 'Site',
        index: true,
        required: true,
    },

})

module.exports = Course
