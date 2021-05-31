'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const mongoose = require('mongoose');
const getBooks = require('./module/user.js')

const PORT = process.env.PORT;



mongoose.connect('mongodb://localhost:27017/favourteBooks',
    { useNewUrlParser: true, useUnifiedTopology: true });


    app.get('/', homepage);
function homepage(req, res) {
  res.send('Hello ');
}

    app.get('/books', getBooks);
   




app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
