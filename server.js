'use strict';

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
const mongoose = require('mongoose');
const UserModel = require('./module/user.js');


const PORT = process.env.PORT;



mongoose.connect('mongodb://localhost:27017/favourteBooks',
    { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/', homepage);
function homepage(req, res) {
    res.send('Hello ');
}

app.get('/books', getBooks);





function getBooks(req, res) {
    const { email } = req.query;
    UserModel.find({ email: email },

        (err, data) => {
            if (err) res.send('did not work');
            else {
                 console.log(data);
                  res.send(data[0].books)

            }
        });


}


app.post('/books', createBooks);

function createBooks(request, response) {
    console.log(request.body);
    const { email, bookName, bookDescription, bookStatus } = request.body;
    UserModel.find({ email: email }, (error, data) => {
        console.log(data);
        data[0].books.push({
            name: bookName,
            description: bookDescription,
            status: bookStatus
        });
        data[0].save();
        response.send(data[0].books);
    });
}



app.delete('/books/:index', deleteBooksForEmail);

function deleteBooksForEmail(req, res) {

    const index = Number(req.params.index);
    console.log(req.params);

    const { email } = req.query;
    console.log(email);
    UserModel.find({ email: email }, (err, data) => {

        const newBooksArr = data[0].books.filter((user, idx) => {

            if( idx !== index) return user;
           
        

        });
        data[0].books = newBooksArr;
        data[0].save();

        res.send(data[0].books);
    });
}




















app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`)
})
