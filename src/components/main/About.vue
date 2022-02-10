<template>
  <div id="about">
    <h2 class="section">About me</h2>
    <div class="about" >
      <div class="about-text">
        <p>
          Full stack software developer with 2+ years of professional experience
          working with programming languages such as PHP, Perl and JavaScript
          With backend and frontend frameworks including Laravel, CodeIgniter,
          VueJS, AngularJS, CSS, Bootstrap and Material Design. Experience
          working in agile teams, and utilising tools such as JIRA, Confluence
          and Git for medium and large companies. Curious and passionate about
          learning new skills that strengthen both my personal and professional
          growth
        </p>

        <h3>My Skills</h3>
        <skills></skills>
      </div>

      <div class="about-image">
        <img src="./../../assets/me.jpg" alt="Imagem de perfil" />
      </div>
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