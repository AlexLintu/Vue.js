export default {
  computed: {
    filteredClients: function () {
      return this.clients.filter((client) => {

        return (this.selectedRep === 'All' || this.selectedRep === client.representative) && (this.selectedStatus === 'All' || this.selectedStatus === client.status)
      });
    }
  }
};
