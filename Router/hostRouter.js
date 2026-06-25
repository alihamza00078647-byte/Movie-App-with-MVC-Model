const express = require('express');
const hostRouter = express.Router();





hostRouter.get('/host/dashboard', (req, res, next) => {
    res.render('host/Admin', {pageTitle : "Admin panel"})
})



exports.hostRouter = hostRouter;