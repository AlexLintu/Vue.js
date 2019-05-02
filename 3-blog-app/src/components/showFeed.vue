<template>
  <div id="show-clients">
    <h1>All Clients</h1>
    <input type="text" v-model="search" placeholder="search clients">
    <div v-for="client in filteredClients" class="single-client">
      <router-link v-bind:to="'/client/' + client.id">
        <h2>{{ client.name }}</h2>
      </router-link>
      <h2>{{ client.status }}</h2>
      <p>TM ID: {{ client.tm_acct_id }}</p>
      <p>Representative: {{ client.representative }}</p>
      <article>{{ client.notes }}</article>
    </div>

    <!-- Feed Pagination -->
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <a class="page-link" href="#" tabindex="-1">Previous</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">Next</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
// Imports
import searchMixin from "../mixins/searchMixin";
export default {
  data() {
    return {
      clients: [],
      search: ""
    };
  },
  created() {
    this.$http.get("http://10.211.7.152/leads").then(function(data) {
      console.log(data.body);
      this.clients = data.body.slice(0, 10);
    });
  },
  mixins: [searchMixin]
};
</script>

<style>
#show-clients {
  max-width: 800px;
  margin: 0px auto;
}
.single-client {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
#show-clients a {
  color: #444;
  text-decoration: none;
}
</style>