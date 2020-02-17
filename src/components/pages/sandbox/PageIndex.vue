<template>
  <div class="-sandbox-page-index">
    <PageTitle title="Sandbox" heroClass="is-info">
      <p class="subtitle">
        A place to break stuff.
      </p>
    </PageTitle>
    <!-- ============================
              FOR TESTING
    ===============================-->
    <section class="section">
      <div class="container">
        <ReactiveBar />
      </div>
    </section>
  </div>
</template>

<script>
import PageTitle from "@/components/ui/PageTitle.vue";
import ReactiveBar from "@/components/pages/sandbox/ReactiveBar.vue";

export default {
  name: "SandboxPageIndex",
  components: {
    PageTitle,
    ReactiveBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
