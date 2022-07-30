const express = require('express'),
  morgan = require('morgan'),
  bodyParser = require('body-parser');
  uuid = require('uuid');

const app = express();

// Morgan middleware logging requests
app.use(morgan('common'));

// function serving all requests of static file (here:"documenation.html") from public folder
app.use(express.static('public'));

// Body parser middleware passing data as JSON
app.use(bodyParser.json());

let movies = [
  {
    Title: 'Dirty Dancing',
    director: 'Emile Ardolino',
    writers: 'Eleanor Bergstein',
    year: 1987,
    genre: 'Drama',
    decription:'Spending the summer at a Catskills resort with her family, Frances "Baby" Houseman falls in love with the camp\'s dance instructor, Johnny Castle.',
    stars: [
      'Patrick Swayze',
      'Jennifer Grey',
      'Jerry Orbach'
    ]
  },
  {
    Title: 'The Science of Sleep',
    director: 'Michel Gondry',
    writers: 'Michel Gondry',
    year: 2006,
    genre: 'Comedy',
    decription:'A man entranced by his dreams and imagination is love-struck with a French woman and feels he can show her his world.',
    stars: [
    'Gael García Bernal',
    'Charlotte Gainsbourg',
    'Miou-Miou'
    ]
  },
  {
    Title: 'Midsommar',
    director: 'Ari Aster',
    writers: 'Ari Aster',
    year: 2019,
    genre: 'Horror',
    decription:'A couple travels to Northern Europe to visit a rural hometown\'s fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.',
    stars: [
      'Florence Pugh',
      'Jack Reynor',
      'Vilhelm Blomgren'
    ]
  },
  {
    Title: 'Get Out',
    director: 'Jordan Peele',
    writers: 'Jordan Peele',
    year: 2017,
    genre: 'Horror',
    decription:'A young African-American visits his white girlfriend\'s parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.',
    stars: [
      'Daniel Kaluuya',
      'Allison Williams',
      'Bradley Whitford'
    ]
  },
  {
    Title: 'The Little Mermaid',
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
    decription:'A mermaid princess makes a Faustian bargain in an attempt to become human and win a prince\'s love.',
    stars: [
      'Jodi Benson (voice)',
      'Samuel E. Wright (voice)',
      'Rene Auberjonois(voice)'
    ]
  },
  {
    Title: 'The Lobster',
    director: 'Yorgos Lanthimos',
    writers: [
    'Yorgos Lanthimos',
    'Efthymis Filippou'
    ],
    year: 2015,
    genre: 'Drama',
    decription:'In a dystopian near future, according to the laws of The City, single people are taken to The Hotel, where they are obliged to find a romantic partner in 45 days or they\'re transformed into beasts and sent off into The Woods.',
    stars: [
      'Colin Farrell',
      'Rachel Weisz',
      'Jessica Barden'
    ]
  },
  {
    Title: 'Pappa Ante Portas',
    director: 'Vicco von B&uuml;low',
    writers: 'Vicco von B&uuml;low',
    year: 1991,
    genre: 'Comedy',
    decription:'After ordering enough typewriting paper for 40 years, just to get discount, Heinrich Lohse is forced to retire. The former manager has plenty of time now to spend with his wife and their 16 year old son. But - do they want that?',
    stars: [
      'Loriot',
      'Evelyn Hamann',
      'Irm Herrmann'
    ]
  },
  {
    Title: 'The Neon Demon',
    director: 'Nicolas Winding Refn',
    writers: [
      'Nicolas Winding Refn',
      'Mary Laws',
      'Polly Stenham'
    ],
    year: 2016,
    genre: 'Horror',
    decription:'An aspiring model, Jesse, is new to Los Angeles. However, her beauty and youth, which generate intense fascination and jealousy within the fashion industry, may prove themselves sinister.',
    stars: [
      'Elle Fanning',
      'Christina Hendricks',
      'Keanu Reeves'
    ]
  },
  {
    Title: 'Up',
    director: [
      'Pete Docter',
      'Bob Peterson'
    ],
    writers: [
      'Pete Docter',
      'Bob Peterson',
      'Tom McCarthy'
    ],
    year: 2009,
    genre: 'Animation',
    decription:'78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.',
    stars: [
      'Edward Asner (voice)',
      'Jordan Nagai (voice)',
      'John Ratzenberger (voice)'
    ]
  },
  {
    Title: 'Lost In Translation',
    director: 'Sofia Coppola',
    writers: 'Sofia Coppola',
    year: 2003,
    genre: 'Comedy',
    decription:'A faded movie star and a neglected young woman form an unlikely bond after crossing paths in Tokyo.',
    stars: [
      'Bill Murray',
      'Scarlett Johansson',
      'Giovanni Ribisi'
    ]
  }
];

// GET requests
app.get('/', (req, res) => {
  res.send('Welcome to my Movie database');
});

// Gets the list of data about all movies
app.get('/movies', (req, res) => {
  res.json(movies);
});

// Gets data about a single movie by title
app.get('/movies/:title', (req, res) => {
  const {title} = requ.params;
  const movie = movies.find(movie => movie.Title === title);

  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(400).send('Movie is not in the database.');
  }
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
