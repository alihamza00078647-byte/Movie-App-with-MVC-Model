const express = require('express');
const movieRouter = express.Router();

// Controller
const movieController = require('../Controller/movieController');


movieRouter.get('/', movieController.getHomePage);
movieRouter.get('/moviedetials/:movieId', movieController.getMoviesPage);
// movieRouter.get('');



exports.movieRouter = movieRouter;