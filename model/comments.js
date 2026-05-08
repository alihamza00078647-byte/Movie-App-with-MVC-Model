const mongoose = require('mongoose');



const commentSchema = new mongoose.Schema({}, {strict : false});

module.exports = mongoose.model('comments', commentSchema, 'comments');




