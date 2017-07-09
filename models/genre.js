var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema ({
    name: String,
    url: String,
});

GenreSchema
.virtual
.get(function () {
    return '/catalog/genre/' + this._id;
});


module.exports = mongoose.model('Genre', GenreSchema);