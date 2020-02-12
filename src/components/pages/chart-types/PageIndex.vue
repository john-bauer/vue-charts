<template>
  <div class="-chart-types-page-index">
    <PageTitle title="Chart Types" heroClass="is-info is-small">
      <p class="subtitle">
        A set of charts that you can use, each as a component in
        <span class="is-family-code">/components/charts/static</span>
      </p>
    </PageTitle>
  </div>
</template>

<script>
import PageTitle from "@/components/ui/PageTitle.vue";

export default {
  name: "ChartTypesPageIndex",
  components: {
    PageTitle
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
