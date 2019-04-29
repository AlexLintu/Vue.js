const app = new Vue({
  el: '#vue-app',
  data: {
    name: 'Alex',
    job: 'Dev',
    website: 'http'
  },

  methods: {
    greet: function (time) {
      return 'Good ' + time + ' ' + this.name + '!';
    }
  }
});