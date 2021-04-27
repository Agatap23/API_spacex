<template>
  <div id="app">
    <launch-post
      v-for="(post, index) in posts"
      :key="post.flight_number"
      :rocketName="post.rocket.rocket_name"
      :desc="launchDetails(post)"
      :page="index + 1"
    />
    <edit-popup v-if="displayPopup" />
  </div>
</template>

<script>
import launchPost from "./components/launchPost.vue";
import editPopup from "./components/editPopup.vue";

export default {
  name: "App",
  components: {
    launchPost,
    editPopup,
  },
  computed: {
    posts: function () {
      return this.$store.state.launchData;
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
