const path = require('path');

// Local Module
const embedded_movies = require('../model/movie.model')
const rootDir = require('../utils/pathUtils');
const comments = require('../model/comments');




function capitalize(str) {
    if (!str) return ""; // Check agar string khali hai

    return str
        .split(' ')
        .filter(word => word.length > 0) // Extra spaces ko remove karta hai
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
    
    
    
    
    exports.getHomePage = async (req, res, next) => {
        const movies = await embedded_movies.find().limit(25).select('-plot_embedding -plot_embedding_voyage_3_large');
        // console.log(movies)
        res.render('guest/index', {pageTitle : 'home page', movies: movies})
    }
    
    
    exports.getMoviesPage = async (req, res, next) => {
        const movieId = req.params.movieId;
        
        const foundMovie = await embedded_movies.findById(movieId).select('-plot_embedding -plot_embedding_voyage_3_large');
        const movies = await embedded_movies.find().limit(10).select('-plot_embedding -plot_embedding_voyage_3_large');
        const comment = await comments.find().limit(20);
        
        res.render('guest/movieDetails', {
            pageTitle : 'Mflix Movies', 
            movie : foundMovie,
            movies : movies,
            comment : comment
        });
    }
    
    
exports.postSearchItem = async (req, res, next) => {
    const { query } = req.body;
    
    let searchItem = capitalize(query.trim());
    if (!searchItem) {
        return res.redirect(req.get('referer' || '/'));
    }

    const search = await embedded_movies.find({title : {$regex: searchItem}}).select('-plot_embedding -plot_embedding_voyage_3_large');
    // console.log(search);
    return res.render('guest/searchMovies', {
        pageTitle : 'Searched Movie Page',
        movies : search
    });
}


exports.getWatchPage = (req, res, next) => {
    res.render('guest/watchPage', {pageTitle : "Watch Video"});
}