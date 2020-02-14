<template>
  <div class="-home-page-index">
    <AppJumbotron />
    <TechnologiesLogos />
  </div>
</template>

<script>
import AppJumbotron from "@/components/pages/home/AppJumbotron.vue";
import TechnologiesLogos from "@/components/pages/home/TechnologiesLogos.vue";

export default {
  name: "HomePageIndex",
  components: {
    AppJumbotron,
    TechnologiesLogos
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
