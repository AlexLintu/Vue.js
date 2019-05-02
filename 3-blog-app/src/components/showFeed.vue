<template>
  <div id="show-blogs">
    <h1>All Clients</h1>
    <input type="text" v-model="search" placeholder="search clients">
    <div v-for="client in filteredBlogs" class="single-client">
      <router-link v-bind:to="'/client/' + client.id">
        <h2>{{ client.name }}</h2>
      </router-link>
      <h2>{{ client.status }}</h2>
      <p>TM ID: {{ client.tm_acct_id }}</p>
      <p>Representative: {{ client.representative }}</p>
      <article>{{ client.notes }}</article>
    </div>
  </div>
</template>

<script>
// Imports
import searchMixin from "../mixins/searchMixin";
export default {
  data() {
    return {
      blogs: [],
      search: ""
    };
  },
  created() {
    this.$http.get("").then(function(data) {
      this.blogs = data.body.slice(0, 10);
    });
  },
  mixins: [searchMixin]
};
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0px auto;
}
.single-client {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
#show-blogs a {
  color: #444;
  text-decoration: none;
}
</style>