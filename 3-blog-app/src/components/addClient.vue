<template>
  <div id="add-client">
    <h2>Add a New Client</h2>
    <form v-if="!submitted">
      <label>Client's Name:</label>
      <input type="text" v-model.lazy="client.name" required>

      <label>Rep's Name:</label>
      <input type="text" v-model.lazy="client.representative" required>

      <label>Source:</label>
      <input type="text" v-model.lazy="client.source" required>

      <label>Email Address:</label>
      <input type="text" v-model.lazy="client.email_address" required>

      <label>Phone Number:</label>
      <input type="text" v-model.lazy="client.phone_number" required>

      <label>Product:</label>
      <input type="text" v-model.lazy="client.product" required>

      <label>Revenue:</label>
      <input type="number" v-model.number="client.revenue" required>

      <label>FSE:</label>
      <input type="number" v-model.number="client.fse" required>

      <label>TM ID:</label>
      <input type="number" v-model.number="client.tm_acct_id" required>

      <label>Notes:</label>
      <textarea v-model.lazy.trim="client.notes"></textarea>

      <label>Status:</label>
      <select v-model="client.status">
        <option v-for="status in statuses">{{ status }}</option>
      </select>

      <button v-on:click.prevent="post">Add Client</button>
    </form>

    <div v-if="submitted">
      <h3>Thanks for adding your post</h3>
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
        product: "Full",
        status: "",
        revenue: 0,
        fse: 0,
        representative: "",
        notes: ""
      },
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
        .post("", {
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
#add-client * {
  box-sizing: border-box;
}
#add-client {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
</style>