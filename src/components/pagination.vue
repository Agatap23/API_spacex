<template>
  <div class="pagination-wrap">
    <button
      v-for="btn in buttons"
      :key="btn.btnNumber"
      class="page-btn"
      @click="changePage(btn.offsetValue)"
      :class="{ clicked: currentOffset === btn.offsetValue }"
    >
      {{ btn.btnNumber }}
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    buttons: function () {
      const buttons = [];
      let number = this.$store.state.fetchedData.length / 10;
      for (let i = 0; i < number; i++) {
        const newButton = {
          offsetValue: i > 0 ? i * 10 : i,
          btnNumber: i + 1,
        };
        buttons.push(newButton);
      }
      return buttons;
    },
    currentOffset: function () {
      return this.$store.state.offset;
    },
  },
  methods: {
    changePage(value) {
      this.$store.commit("setOffset", value);
      this.$store.commit("setCurrentFeed");
    },
  },
};
</script>

<style>
.pagination-wrap {
  max-width: 400px;
  margin: 0 auto;
}
.page-btn {
  margin: 0 1%;
  border: none;
}
.page-btn:hover {
  cursor: pointer;
  background-color: #adc2eb;
}
.clicked {
  background-color: #7094db;
  color: white;
}
</style>