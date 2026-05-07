const { default: mongoose } = require("mongoose");



const movieSchema = new mongoose.Schema({}, {strict : false});

module.exports = mongoose.model('embedded_movies', movieSchema, 'embedded_movies');


// module.exports = Movie;