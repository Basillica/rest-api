const mongoose = require('mongoose');

const Friends = new mongoose.Schema({
   firstName: {type: String, default: ''},
   lastName: {type: String, default: ''},
   country: {type: String, default: ''},
   city: {type: String, default: ''},
   sex: {type: String, default: ''},
   status: {type: String, default: ''},
   age: {type: Number, default: 0}
})

module.exports =  mongoose.model('Friends',Friends)
