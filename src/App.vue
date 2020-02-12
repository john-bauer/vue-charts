<template>
  <div id="app" class="-layout-main-wrapper">
    <div class="-layout-main-container">
      <AppNavbar />
      <router-view />
    </div>
    <AppFooter class="-layout-footer" />
  </div>
</template>

<script>
import AppNavbar from "@/components/layout/AppNavbar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

export default {
  name: "app",
  components: {
    AppNavbar,
    AppFooter
  }
};
</script>

<style lang="scss"></style>
