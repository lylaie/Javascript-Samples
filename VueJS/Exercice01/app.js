const helloWorld = new Vue ({
  el: '#helloVue',
  data: {
    title: "Hello, world !",
    message: "This is my first VueJS template"
  }
});

const example = new Vue ({
  el: "#example",
  data: {
    title: 'Hello',
    message: "It's your daily cat-firmation",
    name: "Chewie",
    img: {
      src: 'https://placeimg.com/200/200/animals',
      alt: 'Placeholders of animal'
    }
  }
});
