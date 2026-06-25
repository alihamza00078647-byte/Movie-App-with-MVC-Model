const express = require('express');
const authMovies = express.Router();


const authController = require('../Controller/authController');




authMovies.get('/login', authController.getLoginPage);

authMovies.get('/signup', authController.getSignupPage);


exports.authMovies = authMovies;