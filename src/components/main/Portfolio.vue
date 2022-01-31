<template>
  <div class="portfolio" id="portfolio">
    <h2>My Portfolio</h2>
    <div class="projects">
      <div class="project">
        <header></header>
        <div class="body">
          <h3>Opem Website</h3>
          <p>
            Website of the Colombian company opem sa where it shows all its
            relevant information and external links to its services
          </p>
        </div>
        <footer>
          <ul class="tech-list">
            <li>Wordpress</li>
            <li>PHP</li>
            <li>MySql</li>
          </ul>

          <div class="project-links">
            <a :href="'//' + this.opem.url" target="_blank" rel="noreferrer">
              <img src="../../assets/icons/link.png" alt="GitHub" />
            </a>
          </div>
        </footer>
      </div>
      <div class="project">
        <header></header>
        <div class="body">
          <h3>Opem Company Web App</h3>
          <p>
            Web application created to manage information and generate
            certificates of courses carried out by the company "OPEM SA"
          </p>
        </div>
        <footer>
          <ul class="tech-list">
            <li>VueJS</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>MySql</li>
            <li>Sequelize</li>
          </ul>

          <div class="project-links">
            <a :href="'//' + this.opemapp.url" target="_blank" rel="noreferrer">
              <img src="../../assets/icons/link.png" alt="Link" />
            </a>
          </div>
        </footer>
      </div>
      <div class="project">
        <header></header>
        <div class="body">
          <h3>Raff</h3>
          <p>This project is under construction</p>
        </div>
        <footer>
          <ul class="tech-list">
            <li>AngularJS</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>MySql</li>
            <li>Ejs</li>
          </ul>

          <div class="project-links">
            <a :href="'//' + this.raff.repo" target="_blank">
              <img src="../../assets/github.png" alt="GitHub" />
            </a>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      opem: { url: "opem.com.co/", repo: "" },
      opemapp: { url: "app.opem.com.co/", repo: "" },
      raff: { url: "", repo: "github.com/hleomojica/raff" },
    };
  },
};
</script>
<style src="../../styles/portfolio.scss" lang="scss" scoped/>

