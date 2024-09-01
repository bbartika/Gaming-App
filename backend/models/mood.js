const mongoose = require('mongoose')
const Schema = mongoose.Schema

const moodSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    mood: {
        type: String,
        required: true,
    },
    notes: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, { timestamps: true });

module.exports = mongoose.model('Mood', moodSchema);
