<template>
  <div id="single-client">
    <h1>{{ client.source }}</h1>
    <article>{{ client.tm_acct_id }}</article>
    <h2>{{ client.status }}</h2>
    <p>TM ID: {{ client.phone_number }}</p>
    <p>Representative: {{ client.representative }}</p>
    <article>{{ client.notes }}</article>
  </div>
</template>

<script>
// Imports

export default {
  data() {
    return {
      id: this.$route.params.id,
      client: {}
    };
  },
  created() {
    this.$http.get("http://10.211.7.152/leads/" + this.id).then(function(data) {
      console.log(data);
      this.client = data.body[0];
    });
  }
};
</script>

<style>
#single-client {
  max-width: 960px;
  margin: 0 auto;
}
</style>