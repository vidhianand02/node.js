const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewsSchema = new Schema({
    headline: {
        type: String,

    },
    description: {
        type: String,

    },

    department: {
        type: String,
    },

    imageUrl: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

module.exports = News = mongoose.model("news", NewsSchema);