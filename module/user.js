'use strict';
const mongoose = require('mongoose');
const BookSchema = require('./books');




const UserSchema = new mongoose.Schema({
  email: {type:String},
  books: [BookSchema]
});

 const UserModel = mongoose.model('user', UserSchema);






const booksFunction = () => {
    const dana = new UserModel({
        email: 'younisdana7@gmail.com',
         books: [
            {
                description: "The story follows the white lawyer Atticus Finch as he attempts to save the life of Tom Robinson, a black man falsely accused of raping a white woman. By being narrated by Finch's six-year-old daughter Scout, the unfairness and incomprehensibility of the situation is illuminated further, seen through the eyes of an innocent child.",

                status: 'good',

                name: 'To Kill A Mockingbird by Harper Lee'
            },
            {
                description: 'It tells the story of Pip, an orphan who escapes his humble beginnings in order to win the love of an upper-class girl, Estella. Featuring some of the most memorable characters in the literary canon – from escaped convict Magwitch to jilted bride Miss Havisham – it endures as a cautionary tale about the personal cost of misguided social advancement.',
                status: "Dickens' works",
                name: 'Great Expectations by Charles Dickens '
            },
            {
                description: 'Lolita, light of my life, fire of my loins. My sin, my soul. Lo-lee-ta: the tip of the tongue taking a trip of three steps down the palate to tap, at three, on the teeth.',
                status: 'most beautiful and controversial novels in the English',
                name: 'Lolita by Vladimir Nabokov'
            }

        ]
    });


  
   

    const noor = new UserModel({
        email: 'noor.hajbi@gmail.com',
        books: [{
            name: 'ٌٌRare cases ',
            status: 'Very good',
            description: 'A psychiatrist writes strange stories that happened with his patients',
        },
        {
            name: 'ٌٌThe Forty Rules of Love',
            status: 'Good',
            description: ' This book explains how the charcter \'Shams\' transformed a scholar into a Sufi (mystic) through love',
        },
        {
            name: 'ٌٌThe rules of Jarteen',
            status: 'Good',
            description: ' rules about a land you live in',
        }],
})

    dana.save();
    noor.save();
}


booksFunction();

module.exports =UserModel;