<template>
  <div class="post">
    <header>
      <h2>{{ rocketName }}</h2>
      <span class="edit-icon" @click="editPost"><square-edit-outline /></span>
    </header>
    <p>{{ desc }}</p>
    <hr />
    <p class="pagination">{{ page }}</p>
  </div>
</template>

<script>
import SquareEditOutline from "vue-material-design-icons/SquareEditOutline.vue";

export default {
  components: {
    SquareEditOutline,
  },
  name: "launchPost",
  props: ["rocketName", "desc", "page"],
  methods: {
    editPost: function () {
      const newObject = {
        title: this.rocketName,
        desc: this.desc,
      };
      this.$store.dispatch("showPopup", newObject);
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.edit-icon:hover {
  cursor: pointer;
}
.post {
  max-width: 500px;
  height: auto;
  border: 1px solid black;
  margin: 20px auto;
  padding: 1%;
  text-align: left;
}
.pagination {
  text-align: center;
  margin: 0;
}
</style>
