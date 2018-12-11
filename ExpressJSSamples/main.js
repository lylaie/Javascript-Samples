// CONSTANTES


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


//SETTINGS

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(cookieParser());

// app.use((req, res, next) => {
//   console.log('Blablabla');
//   // const err = new Error('Erreur, jolie Erreur, dis moi qui est la plus belle ! ');
//   // err.status = 500;
//   next(err);
// })
//
// app.use((req, res, next) => {
//   console.log('Gloubigloubla');
//   next();
// })

app.set('view engine', 'pug');


// ROUTES

app.get('/', (req, res) => {
  const name = req.cookies.username ;
  if (name) {
    res.render('layout', { name });
  } else {
    res.redirect('/hello');
  }
});

app.get('/cards', (req, res) => {
  res.locals.prompt = 'Comment s\'appelle le roi de la Belgique ? ';
  res.locals.hint = 'Son prénom commence par P';
  res.render('card');
});

app.get('/hello', (req, res) => {
  res.render('hello');
});

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username );
  res.redirect('/');
});

app.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello');
});

// Creation of Errors status

app.use((req, res, next) => {
  const err = new Error('Oopsee ! Page Not Found !');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
})

app.listen(3000,() => {
  console.log('Server running on port 3000')
})
