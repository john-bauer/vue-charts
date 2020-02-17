<template>
  <div>
    <PageTitle title="Using API Data" heroClass="is-success">
      <p class="subtitle">
        A simple example that populates a chart with API data.
      </p>
    </PageTitle>
    <section class="section">
      <div class="container">
        <FilmAppearances />
      </div>
    </section>
  </div>
</template>

<script>
import PageTitle from "@/components/ui/PageTitle.vue";
import FilmAppearances from "@/components/pages/api-data/FilmAppearances.vue";

export default {
  name: "ApiDataPageIndex",
  components: {
    PageTitle,
    FilmAppearances
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
