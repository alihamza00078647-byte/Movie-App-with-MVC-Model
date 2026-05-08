const path = require('path');

// Local Module
const embedded_movies = require('../model/movie.model')
const rootDir = require('../utils/pathUtils');
const comments = require('../model/comments');




exports.getHomePage = async (req, res, next) => {
    const movies = await embedded_movies.find().limit(25).select('-plot_embedding -plot_embedding_voyage_3_large');
    console.log(movies)
    res.render('guest/index', {pageTitle : 'home page', movies: movies})
}


exports.getMoviesPage = async (req, res, next) => {
    const movieId = req.params.movieId;
    
    const foundMovie = await embedded_movies.findById(movieId).select('-plot_embedding -plot_embedding_voyage_3_large');
    const movies = await embedded_movies.find().limit(10).select('-plot_embedding -plot_embedding_voyage_3_large');
    const comment = await comments.find().limit(20);
    // console.log(comment)

    res.render('guest/movieDetails', {
        pageTitle : 'Mflix Movies', 
        movie : foundMovie, 
        movies : movies,
        comment : comment
    });
}
