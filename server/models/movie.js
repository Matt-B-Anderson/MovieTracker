const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    release_date: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model("Movie", movieSchema)