export default {
  computed: {
    filteredBlogs: function () {
      return this.blogs.filter((client) => {
        return client.name.match(this.search);
      });
    }
  }
};
