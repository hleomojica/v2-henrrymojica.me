<template>
  <div>
    <home></home>
    <div class="main">
      <about></about>
      <portfolio></portfolio>
      <contacto></contacto>
    </div>
  </div>
</template>

<script>
import Home from "../components/main/Home.vue";
import About from "../components/main/About.vue";
import Portfolio from "../components/main/Portfolio.vue";
import Contacto from "../components/main/Contacto.vue";

export default {
  name: "Main",
  components: { Home, About, Portfolio, Contacto },
};
</script>

<style src="../styles/main.scss" lang="scss" />