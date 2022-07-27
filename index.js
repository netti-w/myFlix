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
    author: 'Emile Ardolino'
  },
  {
    title: 'Science of Sleep',
    author: 'Michel Gondry'
  },
  {
    title: 'Midsommar',
    author: 'Ari Aster'
  },
  {
    title: 'Get Out',
    author: 'Jordan Peele'
  },
  {
    title: 'The Little Mermaid',
    author: 'John Musker and Ron Clements'
  },
  {
    title: 'The Lobster',
    author: 'Yorgos Lanthimos'
  },
  {
    title: 'Pappa Ante Portas',
    author: 'Vicco von B&uuml;low'
  },
  {
    title: 'The Neon Demon',
    author: 'Nicolas Winding Refn'
  },
  {
    title: 'Up',
    author: 'Pete Docter'
  },
  {
    title: 'Lost In Translation',
    author: 'Sofia Coppola'
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
