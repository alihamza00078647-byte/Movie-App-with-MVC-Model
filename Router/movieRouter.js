const express = require('express');
const movieRouter = express.Router();

// Controller
const movieController = require('../Controller/movieController');


movieRouter.get('/', movieController.getHomePage);

movieRouter.get('/moviedetials/:movieId', movieController.getMoviesPage);

movieRouter.post('/search', movieController.postSearchItem);

movieRouter.get('/watch', movieController.getWatchPage);



exports.movieRouter = movieRouter;