<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
// Imports
import showFeed from "./components/showFeed.vue";
import header from "./components/header.vue";
export default {
  components: {
    "app-header": header
  },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Nunito:600");
body {
  margin: 0;
  font-family: "Nunito", sans-serif;
}
</style>