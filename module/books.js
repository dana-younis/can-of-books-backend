'use strict';
const mongoose = require('mongoose');


const BookSchema = new mongoose.Schema({
  name: {type:String},
  description: {type:String},
  status: {type:String}
});

module.exports =BookSchema;