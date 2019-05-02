export default {
  computed: {
    filteredClients: function () {
      return this.clients.filter((client) => {
        return client.name.match(this.search);
      });
    }
  }
};
