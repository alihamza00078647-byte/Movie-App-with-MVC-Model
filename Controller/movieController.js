// const embedded_movies = require('')
const embedded_movies = require('../model/movie.model')
const path = require('path');
const rootDir = require('../utils/pathUtils')


exports.getHomePage = async (req, res, next) => {
    const movies = await embedded_movies.find().limit(40).select('-plot_embedding -plot_embedding_voyage_3_large');
    res.render('guest/index', {pageTitle : 'home page', movies: movies})
}


exports.getMoviesPage = async (req, res, next) => {
    const movieId = req.params.movieId;

    const foundMovie = await embedded_movies.findById(movieId);
    const SimilarMovies = await embedded_movies.find().limit(10);

    res.render('guest/movieDetails', {
        pageTitle : 'Mflix Movies', 
        movie : foundMovie, 
        movies : SimilarMovies
    });
}
