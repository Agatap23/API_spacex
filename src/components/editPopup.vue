<template>
  <div class="popup-container">
    <div class="popup">
      <header>
        <h3>Edit your post</h3>
        <span class="close-box" @click="closePopup"><close-box /></span>
      </header>
      <form>
        <input type="text" v-model="popupData.title" />
        <textarea rows="10" columns="33" v-model="popupData.desc"></textarea>
        <button class="edit-btn" @click="closePopup">Edit</button>
      </form>
    </div>
  </div>
</template>

<script>
import CloseBox from "vue-material-design-icons/CloseBox.vue";

export default {
  components: {
    CloseBox,
  },
  computed: {
    popupData: function () {
      return this.$store.state.popupData;
    },
  },
  methods: {
    closePopup: function () {
      this.$store.commit("toggleDisplay");
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2% 0;
}
.close-box {
  margin: 0;
}
.close-box:hover {
  cursor: pointer;
  color: #7094db;
}
.popup-container {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup {
  width: 500px;
  height: auto;
  background-color: white;
  padding: 2% 1%;
}
form {
  display: flex;
  flex-direction: column;
}
textarea {
  resize: none;
  margin: 2% 0;
}
.close-btn {
  padding: 1%;
}
.close-btn:hover {
  cursor: pointer;
}
</style>