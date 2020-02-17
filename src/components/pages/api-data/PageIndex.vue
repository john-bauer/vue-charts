<template>
  <section class="section">
    <div class="container">
      <FilmAppearances />
    </div>
  </section>
</template>

<script>
import FilmAppearances from "@/components/pages/api-data/FilmAppearances.vue";

export default {
  name: "ApiDataPageIndex",
  components: {
    FilmAppearances
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
