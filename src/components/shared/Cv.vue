<template>
  <div class="container">
    <vue-pdf src="./henrry_mojica.pdf"></vue-pdf>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
.container{
    margin-top: 5rem;
    margin-left: 15rem;
    margin-right: 15rem;
}

@media (max-width: 740px) {
  .container {
    margin: 0;
  }
}
</style>