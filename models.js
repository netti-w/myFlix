const mongoose = require('mongoose');

let movieSchema = mongoose.Schema( {
  Title: {type: String, required: true},
  Director: {
    Name: String,
    Bio: String,
    Birth: Number,
    Death: Number
  },
  ReleaseYear: Number,
  Genre: {
    Name: String,
    Description: String
  },
  Description: {type: String, required: true},
  ImageURL: String,
  Featured: Boolean,
  Actors: [String]
} );

let userSchema = mongoose.Schema({
  Username: {type: String, required: true},
  Password: {type: String, required: true},
  Email: {type: String, required: true},
  Birthday: Date,
  FavouriteMovies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]
});

let Movie = mongoose.model('Movie', movieSchema);
let User = mongoose.model('User', userSchema);

module.exports.Movie = Movie;
module.exports.User = User;
