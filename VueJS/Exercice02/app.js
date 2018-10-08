const book = new Vue({
    el: '#book',
    data: {
      title: 'The Sirens of Titan',
      author: 'Kurt Vonnegut',
      summary: 'This is a summary of the Sirens of Titan.',
    },
    methods: {
      sayHello: function(){
        alert(this.title);
      }
    }
});
