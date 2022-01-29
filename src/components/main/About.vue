<template>
  <div class="sobre" id="about">
    <div class="about-text" data-aos="slide-left">
      <h2>About me</h2>
      <p>
        Curious and passionate about learning new stuff. 2+ years of experience
        building web data-driven application and Enterprise solutions for
        Med/big companies ERP, POS. I have worked with programming languages
        such as PHP, Perl, JavaScript with frameworks like Laravel, NodeJS
        (ExpressJs) for the backend, and front end technologies such as VueJS,
        AngularJS, CSS, Bootstrap, Material Design. Knowledge using DevTools
        stacks and teamwork solutions such as JIRA, Confluence, and GIT
      </p>

      <h3>My Skills</h3>
      <skills></skills>
    </div>

    <div class="about-image">
      <img src="./../../assets/me.jpg" alt="Imagem de perfil" />
    </div>
  </div>
</template>
<script>
import Skills from "./Skills.vue";
export default {
  components: { Skills },
};
</script>

<style src="../../styles/about.scss" lang="scss" scoped/>