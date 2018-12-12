// CONSTANTES


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


//SETTINGS

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(cookieParser());
app.use('/static',express.static('public'));

app.set('view engine', 'pug');


// ROUTES

const mainRoutes = require('./routes');
const cardRoutes = require('./routes/cards');

app.use(mainRoutes);
app.use(cardRoutes);

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
