<template>
  <div class="home">
    <img alt="kapow logo" src="../assets/kapow.png" class="center"/>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
  img {
    width: 400px;
    display: block;
    margin-left: auto;
    margin-right: auto;

  }
</style>
