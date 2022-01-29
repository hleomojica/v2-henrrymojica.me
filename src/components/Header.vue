<template>
  <header id="header">
    <a href="/" class="logo"> <span>H</span> <span>Mojica</span></a>
    <label htmlFor="switch">Toggle</label>
    <nav class="navigation" :class="{ active: isActive }"  @click="setActive">
      <a href="#home" v-scroll-to="'#home'">Home</a>
      <a href="#about" v-scroll-to="'#about'">About</a>
      <a href="#skills" v-scroll-to="'#about'">Skills</a>
      <a href="#portfolio" v-scroll-to="'#portfolio'">Porfolio</a>
      <a href="#contact">Contact</a>
      <a href="./henrry_mojica.pdf" class="button"> CV</a>
    </nav>

    <div
      :aria-expanded="{ isActive }"
      :aria-haspopup="true"
      aria-label="adsf"
      class="menu"
      :class="{ active: isActive }"
      @click="setActive()"
    ></div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    toggleMenu(e) {
      e.target.classList.toggle("active");
      document.querySelector(".navigation").classList.toggle("active");
    },
    close() {
      document.querySelector(".navigation").classList.toggle("active");
      document.querySelector(".menu-hamburguer").classList.toggle("active");
      this.setActive();
    },
    setActive() {
      this.isActive = !this.isActive;
      console.log(this.isActive);
    },
  },
};
</script>
<style src="../styles/header.scss" lang="scss" scoped />
