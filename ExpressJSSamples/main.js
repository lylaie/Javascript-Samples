// CONSTANTES


const express = require('express');
const app = express();


//SETTINGS


app.set('view engine', 'pug');


// ROUTES

app.get('/', (req, res) => {
  res.render('layout')
})

app.get('/cards', (req, res) => {
  res.locals.prompt = 'Comment s\'appelle le roi de la Belgique ? ';
  res.locals.hint = 'Son prénom commence par P';
  res.render('card');
})

app.listen(3000, () => {
  console.log('Server running on port 3000')
})
