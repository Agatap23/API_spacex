<template>
  <div id="app">
    <launch-post
      v-for="(post, index) in posts"
      :key="post.flight_number"
      :rocketName="post.rocket.rocket_name"
      :desc="launchDetails(post)"
      :page="index + offsetPage"
    />
    <edit-popup v-if="displayPopup" />
    <pagination />
  </div>
</template>

<script>
import launchPost from "./components/launchPost.vue";
import editPopup from "./components/editPopup.vue";
import pagination from "./components/pagination.vue";

export default {
  name: "App",
  components: {
    launchPost,
    editPopup,
    pagination,
  },
  computed: {
    posts: function () {
      return this.$store.state.currentFeed;
    },
    offsetPage: function () {
      return this.$store.state.offset + 1;
    },
    displayPopup: function () {
      return this.$store.state.displayPopup;
    },
  },
  methods: {
    launchDetails: function (post) {
      return post.details === null
        ? "Unfortunately, there is no description yet."
        : post.details;
    },
  },
  created() {
    this.$store.dispatch("fetchData");
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
</style>
