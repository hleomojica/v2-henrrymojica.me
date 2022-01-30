<template>
  <iframe
    id="fred"
    style="border: 1px solid #666ccc"
    title="PDF in an i-Frame"
    src="./henrry_mojica.pdf"
    frameborder="1"
    scrolling="auto"
    height="1100"
    width="850"
  ></iframe>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
iframe {
  margin-top: 5rem;
  margin-left: 15rem;
  margin-right: 15rem;
  max-height: 100%;
}

@media (max-width: 740px) {
  .container {
    margin: 0;
  }
}
</style>