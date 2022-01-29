<template>
  <div class="container">
    <iframe src="https://docs.google.com/viewerng/viewer?url=http://infolab.stanford.edu/pub/papers/google.pdf&embedded=true" frameborder="0" height="100%" width="100%">
</iframe>
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