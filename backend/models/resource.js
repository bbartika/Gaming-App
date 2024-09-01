const mongoose = require('mongoose')
const Schema = mongoose.Schema

const resourceSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    link: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },


    }, { timestamps: true });
    




module.exports = mongoose.model('Resource', resourceSchema);
