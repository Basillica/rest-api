const mongoose = require('mongoose');

const Skills = new mongoose.Schema({
   java: {type: String, default: ''},
   python: {type: String, default: ''},
   webDevelopment: {type: String, default: ''},
   bashScripting: {type: String, default: ''},
   rating: {type: Number, default: 0},
   status: {type: String, default: ''},
})

module.exports =  mongoose.model('Skills',Skills)
