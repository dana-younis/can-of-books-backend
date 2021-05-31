'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const UserModel = require('./module/user.js')
const app = express();
app.use(cors());

const PORT = process.env.PORT;



// connect express server to mongodb server
mongoose.connect('mongodb://localhost:27017/favourteBooks',
    { useNewUrlParser: true, useUnifiedTopology: true });


    app.get('/', homepage);
function homepage(req, res) {
  res.send('Hello ');
}

    app.get('/books', getBooks);
    function getBooks(req, res) {
        const { email } = req.query;
        UserModel.find ( {email: email} ,

             function (err, userData) {
          if (err) res.send('did not work');
          else{
          res.send(userData);}
        });
      }





app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
