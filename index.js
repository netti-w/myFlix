const express = require('express'),
  morgan = require('morgan');

const app = express();

// Morgan middleware logging requests
app.use(morgan('common'));

// function serving all requests of static file (here:"documenation.html") from public folder
app.use(express.static('public'));

let movies = [
  {
    title: 'Dirty Dancing',
    director: 'Emile Ardolino',
    writers: ['Eleanor Bergstein'],
    year: 1987,
    genre: 'Drama',
    stars: [
      'Patrick Swayze',
      'Jennifer Grey',
      'Jerry Orbach'
    ]
  },
  {
    title: 'The Science of Sleep',
    director: 'Michel Gondry',
    writers: 'Michel Gondry',
    year: 2006,
    genre: 'Comedy, Drama',
    stars: [
    'Gael García Bernal',
    'Charlotte Gainsbourg',
    'Miou-Miou'
    ]
  },
  {
    title: 'Midsommar',
    director: 'Ari Aster',
    writers: 'Ari Aster',
    year: '2019',
    genre: 'Horror',
    stars: [
      'Florence Pugh',
      'Jack Reynor',
      'Vilhelm Blomgren'
    ]
  },
  {
    title: 'Get Out',
    director: 'Jordan Peele',
    writers: 'Jordan Peele',
    year: '2017',
    genre: 'Horror',
    stars: [
      'Daniel Kaluuya',
      'Allison Williams',
      'Bradley Whitford'
    ]
  },
  {
    title: 'The Little Mermaid',
    director: [
      'John Musker',
      'Ron Clements'
    ],
    writers: [
      'John Musker',
      'Ron Clements',
      'Hans Christian Andersen'
    ],
    year: 1989,
    genre: 'Animation',
    stars: [
      'Jodi Benson (voice)',
      'Samuel E. Wright (voice)',
      'Rene Auberjonois(voice)'
  },
  {
    title: 'The Lobster',
    director: 'Yorgos Lanthimos',
    writers: [
    'Yorgos Lanthimos',
    'Efthymis Filippou'
    ],
    year: '2015',
    genre: 'Drama',
    stars: [
      'Colin Farrell',
      'Rachel Weisz',
      'Jessica Barden'
    ]
  },
  {
    title: 'Pappa Ante Portas',
    director: 'Vicco von B&uuml;low',
    writers: 'Vicco von B&uuml;low',
    year: '1991',
    genre: 'Comedy',
    stars: [
      'Loriot',
      'Evelyn Hamann',
      'Ortrud Beginnen'
    ]
  },
  {
    title: 'The Neon Demon',
    director: 'Nicolas Winding Refn',
    writers: [
      'Nicolas Winding Refn',
      'Mary Laws',
      'Polly Stenham'
    ],
    year: '2016',
    genre: 'Horror',
    stars: [
      'Elle Fanning',
      'Christina Hendricks',
      'Keanu Reeves'
    ]
  },
  {
    title: 'Up',
    director: [
      'Pete Docter',
      'Bob Peterson'
    ],
    writers: [
      'Pete Docter',
      'Bob Peterson',
      'Tom McCarthy'
    ],
    year: '2009',
    genre: 'Animation',
    stars: [
      'Edward Asner (voice)',
      'Jordan Nagai (voice)',
      'John Ratzenberger (voice)'
    ]
  },
  {
    title: 'Lost In Translation',
    director: 'Sofia Coppola',
    writers: 'Sofia Coppola',
    year: '2003',
    genre: 'Comedy, Drama',
    stars: [
      'Bill Murray',
      'Scarlett Johansson',
      'Giovanni Ribisi'
    ]
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
