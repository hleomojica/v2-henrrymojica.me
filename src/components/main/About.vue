<template>
  <div id="about">
    <h2 class="section">About me</h2>
    <div class="about">
      <div class="about-text">
        <p>
          As a full-stack software developer with over three years of professional experience, I have expertise in
          programming languages such as PHP, Perl, and JavaScript, as well as proficiency in backend and frontend
          frameworks, including Laravel, CodeIgniter, NodeJs, VueJS, AngularJS, CSS, Bootstrap, and Material Design. I
          have worked in agile teams and utilized tools such as JIRA, Confluence, and Git for medium and large companies.

          My passion for learning new skills is at the core of my personal and professional growth. I believe in staying
          current with the latest technological advancements and enjoy using my skills to create innovative solutions that
          meet the needs of businesses and consumers alike.

          With a focus on attention to detail and customer satisfaction, I have a proven track record of delivering
          high-quality results. I'm committed to providing excellent service to my clients and exceeding their
          expectations.
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