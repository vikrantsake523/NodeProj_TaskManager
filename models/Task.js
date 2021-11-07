const mongoose = require('mongoose')

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20, 'Name less than 20 chars']
    },
    completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task',TaskSchema)