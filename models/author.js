var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AuthorSchema = Schema({
   first_name: {type: String, required: true, max: 100},
   last_name:  {type: String, required: true, max: 100},
   dateOfBirth: {type: Date},
   dateOfDeath: {type: Date},
});

// Virtual for author's full name
AuthorSchema
.virtual('name')
.get(function () {
    return this.last_name + ', ' + this.first_name;
});


// Virtual for author's URL
AuthorSchema
.virtual('url')
.get(function () {
   return '/catalog/author/' + this._id;
});

module.exports = mongoose.model('Author', AuthorSchema);