<template>
  <div id="add-client">
    <h2>Add a New Client</h2>
    <form v-if="!submitted">
      <div class="form-group">
        <label>Representative's Name:</label>
        <select class="form-control" v-model="client.representative">
          <option v-for="representative in reps">{{ representative }}</option>
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
            <option v-for="status in statuses">{{ status }}</option>
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

      <button v-on:click.prevent="post" class="btn btn-primary">Add Client</button>
    </form>

    <div v-if="submitted">
      <h3>Thanks for adding a new client! :)</h3>
    </div>
  </div>
</template>

<script>
// Imports
export default {
  data() {
    return {
      client: {
        source: "",
        tm_acct_id: 0,
        name: "",
        email_address: "",
        phone_number: "",
        product: "",
        status: "",
        revenue: 0,
        fse: 0,
        representative: "",
        notes: ""
      },
      reps: [
        "Seb Lloyd",
        "John Kassis",
        "Aidan Pelton",
        "Jonathan Gerow",
        "Aneesh Bhatia",
        "Danielle Starkman",
        "Ryan Grills",
        "Matteo Bombara",
        "Neyousha Alamzadeh"
      ],
      statuses: [
        "Contacted",
        "Declined",
        "Engaged",
        "Refunded",
        "Sold",
        "Waiting for Selection"
      ],
      submitted: false
    };
  },
  methods: {
    post: function() {
      this.$http
        .post("http://10.211.7.152/leads", {
          source: this.client.source,
          tm_acct_id: this.client.tm_acct_id,
          name: this.client.name,
          email_address: this.client.email_address,
          phone_number: this.client.phone_number,
          product: this.client.product,
          status: this.client.status,
          revenue: this.client.revenue,
          fse: this.client.fse,
          representative: this.client.representative,
          notes: this.client.notes
        })
        .then(function(data) {
          console.log(data);
          this.submitted = true;
        });
    }
  }
};
</script>

<style scoped>
h2,
h3 {
  padding: 55px 0 45px 0;
  text-align: center;
}

#add-client {
  margin: 0 auto;
  max-width: 800px;
}
</style>