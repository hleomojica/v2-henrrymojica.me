<template>
  <section class="home" id="home">
    <img src="../../assets/home5.svg" alt="" />
    <div class="tittle">
      <p>Hola 👋, I am: </p>
      <h1>Henrry Mojica</h1>
      <div class="displayBox" data-aos="flip-right"></div>
    </div>

    <div class="subtittle">
      <h3>Full Stack Software Developer</h3>
    </div>

    <p class="complementary">
      <vue-typed-js
        :strings="['Learning', 'Music', 'Coding', 'Burgers', 'Challenges','JavaScript']"
        :typeSpeed="90"
        :loop="true"
      >
        <p>Passionate about <span class="typing"></span></p>
      </vue-typed-js>
    </p>
    <a smooth v-scroll-to="'#contact'" class="button">Contact Me</a>
  </section>
</template>

<script>
export default {
  mounted() {},
};
</script>

<style src="../../styles/home.scss" lang="scss" />