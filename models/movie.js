var mongoose = require('mongoose');

var movieShema = mongoose.Schema(
    {
        title: String,
        genres: [],
        runtime: {type: Number},
        rated: String,
        year: {type: Date, default: Date.now},
        directors: [],
        cast: [],
        type: String
    }
);

module.exports = mongoose.model('Movie', movieShema);