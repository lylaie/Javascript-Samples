const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/cards', (req, res) => {
  const numberOfCards = cards.length;
  const flashcardId = Math.floor( Math.random() * numberOfCards );
  res.redirect(`/cards/${flashcardId}?side=question`);
})


router.get('/cards/:id', (req, res) => {
  const { side } = req.query;
  const { id } = req.params;

  if (!side){
    return res.redirect(`/cards/${id}?side=question`);
  }
  const name = req.cookies.username;
  const text = cards[id][side];
  const { hint } = cards[id];
  const templateData = { id, text, name };

  if (side === 'question') {
    templateData.hint = hint;
    templateData.sidetoShow = 'answer';
    templateData.sidetoShowDisplay = 'Answer';
  } else if (side === 'answer') {
    templateData.sidetoShow = 'question';
    templateData.sidetoShowDisplay = 'Question';
  }
  res.render('card', templateData );
});


module.exports = router;
