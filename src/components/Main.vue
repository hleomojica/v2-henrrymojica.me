<template>
  <div class="main">
    <home
    ></home>
    <about></about>
    <portfolio></portfolio>
  </div>
</template>

<script>
import Home from "../components/main/Home.vue";
import About from "../components/main/About.vue";
import Portfolio from "../components/main/Portfolio.vue";

export default {
  name: "Main",
  components: { Home, About, Portfolio },
};
</script>

<style src="../styles/main.scss" lang="scss" />