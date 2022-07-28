const express = require('express'),
  morgan = require('morgan');

const app = express();

// Morgan middleware logging requests
app.use(morgan('common'));

// function serving all requests of static file (here:"documenation.html") from public folder
app.use(express.static('public'));

let topMovies = [
  {
    title: 'Dirty Dancing',
    director: 'Emile Ardolino'
  },
  {
    title: 'Science of Sleep',
    director: 'Michel Gondry'
  },
  {
    title: 'Midsommar',
    director: 'Ari Aster'
  },
  {
    title: 'Get Out',
    director: 'Jordan Peele'
  },
  {
    title: 'The Little Mermaid',
    director: 'John Musker and Ron Clements'
  },
  {
    title: 'The Lobster',
    director: 'Yorgos Lanthimos'
  },
  {
    title: 'Pappa Ante Portas',
    director: 'Vicco von B&uuml;low'
  },
  {
    title: 'The Neon Demon',
    director: 'Nicolas Winding Refn'
  },
  {
    title: 'Up',
    director: 'Pete Docter'
  },
  {
    title: 'Lost In Translation',
    director: 'Sofia Coppola'
  },
];

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my Movie database');
});


app.get('/movies', (req, res) => {
  res.json(topMovies);
});

// Error handling middleware logging app level errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Listen for requests
app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
