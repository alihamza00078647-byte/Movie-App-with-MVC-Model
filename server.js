require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const ejs = require('ejs');



// 
const path = require('path');
const rootDir = require('./utils/pathUtils');
const { movieRouter } = require('./Router/movieRouter');



app.set('views', 'views');
app.set('view engine', 'ejs');


app.use(cors());
app.use(movieRouter);
// app.use(, movieRouter);

app.use(express.static(path.join(rootDir, 'public')));

const port = 3005;
mongoose.connect(process.env.MONGOURL).then(() => {
    console.log('DB is Connect');
    app.listen(port, () => {    
        console.log(`Server Running at http://localhost:${port}`);
    });
}).catch((err) => {
    console.log(`Server Running at ${err}`)
})