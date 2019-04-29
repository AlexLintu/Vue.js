const app = new Vue({
  el: '#vue-app',
  data: {
    name: 'Alex',
    job: 'Dev'
  },

  methods: {
    greet: function () {
      return 'Good morning!';
    }
  }
});