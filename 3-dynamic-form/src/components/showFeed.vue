<template>
  <div id="show-clients">
    <h1>All Clients</h1>
    <!-- FILTERS START -->
    <div class="form-row">
      <div class="form-group col-md-6">
        <label>Representative's Name:</label>
        <select class="form-control" v-model="selectedRep">
          <option
            v-for="representative in repsOptions"
            v-bind:value="representative"
          >{{ representative }}</option>
        </select>
      </div>
      <div class="form-group col-md-6">
        <label>Status:</label>
        <select class="form-control" v-model="selectedStatus">
          <option v-for="status in statusOptions" v-bind:value="status">{{ status }}</option>
        </select>
      </div>
    </div>
    <br>
    <!-- END FILTERS -->

    <!-- FEED -->
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">TM ID</th>
          <th scope="col">Status</th>
          <th scope="col">Client</th>
          <th scope="col">Representative</th>
          <th scope="col">View More</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in filteredClients">
          <th scope="row">{{ client.name }}</th>
          <td>{{ client.status }}</td>
          <td>{{ client.name }}</td>
          <td>{{ client.representative }}</td>
          <td>
            <router-link v-bind:to="'/client/' + client.id">
              <a href="#" class="btn btn-primary">View More</a>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- END FEED -->
  </div>
  <!-- </div> -->
</template>

<script>
// Imports
import searchMixin from "../mixins/searchMixin";
export default {
  data() {
    return {
      clients: [],
      selectedStatus: "All",
      selectedRep: "All",
      statusOptions: [
        "All",
        "Contacted",
        "Declined",
        "Engaged",
        "Refunded",
        "Sold",
        "Waiting for Selection"
      ],
      repsOptions: [
        "All",
        "Seb Lloyd",
        "John Kassis",
        "Aidan Pelton",
        "Jonathan Gerow",
        "Aneesh Bhatia",
        "Danielle Starkman",
        "Ryan Grills",
        "Matteo Bombara",
        "Neyousha Alamzadeh"
      ]
    };
  },
  created() {
    this.$http.get("http://10.211.7.152/leads").then(function(data) {
      console.log(data.body);
      this.clients = data.body;
      // this.clients = data.body.slice(0, 10);
    });
  },
  mixins: [searchMixin]
};
</script>

<style>
h1 {
  padding: 55px 0 45px 0;
  text-align: center;
}

#show-clients {
  max-width: 1000px;
  margin: 0px auto;
}
</style>