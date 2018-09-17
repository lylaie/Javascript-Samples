$('.spoiler').on('click', 'button', (e) => {
  $(e.target).prev().show();
  $(e.target).hide();
});

const $button = $('<button>Reveal spoiler</button>');

$('.spoiler').append($button);

$('.spoiler span').hide();
