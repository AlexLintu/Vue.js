<template>
  <div id="single-client">
    <h2>Client's Details</h2>
    <form>
      <div class="form-group">
        <label>Representative's Name:</label>
        <select class="form-control" v-model="client.representative">
          <option>{{ client.representative }}</option>
        </select>
      </div>

      <div class="form-group">
        <label>Client's Name:</label>
        <input type="text" class="form-control" v-model.lazy="client.name" required>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Source:</label>
          <input type="text" class="form-control" v-model.lazy="client.source" required>
        </div>
        <div class="form-group col-md-6">
          <label>Product:</label>
          <input type="text" class="form-control" v-model.lazy="client.product" required>
        </div>
      </div>

      <div class="form-group">
        <label>Email Address:</label>
        <input type="text" class="form-control" v-model.lazy="client.email_address" required>
      </div>

      <div class="form-group">
        <label>Phone Number:</label>
        <input type="text" class="form-control" v-model.lazy="client.phone_number" required>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Status:</label>
          <select class="form-control" v-model="client.status">
            <option>{{ client.status }}</option>
          </select>
        </div>
        <div class="form-group col-md-6">
          <label>Revenue:</label>
          <input type="number" class="form-control" v-model.number="client.revenue" required>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label>FSE:</label>
          <input type="number" class="form-control" v-model.number="client.fse" required>
        </div>
        <div class="form-group col-md-6">
          <label>TM ID:</label>
          <input type="number" class="form-control" v-model.number="client.tm_acct_id" required>
        </div>
      </div>

      <div class="form-group">
        <label>Notes:</label>
        <textarea class="form-control" v-model.lazy.trim="client.notes"></textarea>
      </div>
    </form>
  </div>
</template>

<script>
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
      this.client = data.body;
    });
  }
};
</script>

<style>
h2 {
  padding: 55px 0 45px 0;
  text-align: center;
}

#single-client {
  max-width: 800px;
  margin: 0 auto;
}
</style>