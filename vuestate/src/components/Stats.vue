<template>
  <div class="stats">
      <h1>Link Component</h1>
      <p>There are currently {{ countLinks }} links!</p>
      <button v-on:click="removeAllLinks">Remove all links</button>
      <p>{{ msg }}</p>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex"

export default {
  name: "Stats",
  data() {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapGetters([
      "countLinks"
    ])
  },
  methods: {
    ...mapMutations(["REMOVE_ALL"]),
    ...mapActions(["removeAll"]),
    removeAllLinks() {
      this.removeAll().then(() => {
        this.msg = "All links have been removed!" // will only appear once actions has been performed. Promise
      });
    }
  }
};
</script>

<style scoped>
  body {
    background: green;
  }

  button {
    padding: 10px;
    margin-top: 30px;
    width: 50%;
    background: rgb(248, 158, 122);
    border: 2px solid red;
    outline: 0;
    cursor: pointer;
    font-size: 20px;
  }

  p {
    font-size: 20px;
  }
</style>